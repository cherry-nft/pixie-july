import { breakpoints, Responsive, Union } from '../props/prop-def';

// Define BreakpointKey type
type BreakpointKey = typeof breakpoints[number];

// Define ResponsiveObject type
type ResponsiveObject<T> = Partial<Record<BreakpointKey, T>>;

interface GetResponsiveStylesOptions {
  className: string;
  customProperties: `--${string}`[];
  value: Responsive<Union> | Responsive<string> | undefined;
  propValues: string[] | readonly string[];
  parseValue?: (value: string) => string | undefined;
}

function getResponsiveStyles({ className, customProperties, ...args }: GetResponsiveStylesOptions) {
  const responsiveClassNames = getResponsiveClassNames({
    allowArbitraryValues: true,
    className,
    ...args,
  });

  const responsiveCustomProperties = getResponsiveCustomProperties({ customProperties, ...args });
  return [responsiveClassNames, responsiveCustomProperties] as const;
}

interface GetResponsiveClassNamesOptions {
  allowArbitraryValues?: boolean;
  className: string;
  value: Responsive<Union> | Responsive<string> | undefined;
  propValues: string[] | readonly string[];
  parseValue?: (value: string) => string | undefined;
}

function getResponsiveClassNames({
  allowArbitraryValues,
  value,
  className,
  propValues,
  parseValue = (value) => value,
}: GetResponsiveClassNamesOptions): string | undefined {
  const classNames: string[] = [];

  if (!value) {
    return undefined;
  }

  if (typeof value === 'string' && propValues.includes(value)) {
    return getBaseClassName(className, value, parseValue);
  }

  if (isResponsiveObject(value)) {
    const object = value as ResponsiveObject<string>;

    Object.entries(object).forEach(([bp, bpValue]) => {
      if (breakpoints.includes(bp as BreakpointKey) && bpValue !== undefined) {
        if (propValues.includes(bpValue)) {
          const baseClassName = getBaseClassName(className, bpValue, parseValue);
          const bpClassName = bp === 'initial' ? baseClassName : `${bp}:${baseClassName}`;
          classNames.push(bpClassName);
        } else if (allowArbitraryValues) {
          const bpClassName = bp === 'initial' ? className : `${bp}:${className}`;
          classNames.push(bpClassName);
        }
      }
    });

    return classNames.join(' ');
  }

  if (allowArbitraryValues) {
    return className;
  }
}

function getBaseClassName(
  className: string,
  value: string,
  parseValue: (value: string) => string | undefined
): string {
  const delimiter = className ? '-' : '';
  const matchedValue = parseValue(value);
  const isNegative = matchedValue?.startsWith('-');
  const minus = isNegative ? '-' : '';
  const absoluteValue = isNegative ? matchedValue?.substring(1) : matchedValue;
  return `${minus}${className}${delimiter}${absoluteValue}`;
}

interface GetResponsiveCustomPropertiesOptions {
  customProperties: `--${string}`[];
  value: Responsive<Union> | Responsive<string> | undefined;
  propValues: string[] | readonly string[];
  parseValue?: (value: string) => string | undefined;
}

function getResponsiveCustomProperties({
  customProperties,
  value,
  propValues,
  parseValue = (value) => value,
}: GetResponsiveCustomPropertiesOptions) {
  let styles: Record<string, string | undefined> = {};

  if (!value || (typeof value === 'string' && propValues.includes(value))) {
    return undefined;
  }

  if (typeof value === 'string') {
    styles = Object.fromEntries(customProperties.map((prop) => [prop, value]));
  }

  if (isResponsiveObject(value)) {
    const object = value as ResponsiveObject<string>;

    Object.entries(object).forEach(([bp, bpValue]) => {
      if (breakpoints.includes(bp as BreakpointKey) && bpValue && !propValues.includes(bpValue)) {
        for (const customProperty of customProperties) {
          const bpProperty = bp === 'initial' ? customProperty : `${customProperty}-${bp}`;
          styles[bpProperty] = bpValue;
        }
      }
    });
  }

  for (const key in styles) {
    const value = styles[key];
    if (value !== undefined) {
      styles[key] = parseValue(value);
    }
  }

  return styles;
}

function isResponsiveObject(value: any): value is ResponsiveObject<string> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

export { getResponsiveStyles, getResponsiveCustomProperties, getResponsiveClassNames };
