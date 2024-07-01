import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Card, Button, Heading, Box, Text, IconButton, Separator, Link } from '@radix-ui/themes';

interface MembershipCardProps {
    tierID: number;
    tierTitle: string;
    tierDescription: string;
    tierPrice: number;
    tabIndex: number;
    membershipLevels: Array<{
        id: string; // Assuming each level has a unique ID for key purposes
        name: string;
        description: string;
        price: string;
    }>;
}

const MembershipCard: React.FC<MembershipCardProps> = ({ tierID, tierTitle, tierDescription, tierPrice, tabIndex, membershipLevels }) => {
    const formattedPrice = tierPrice.toFixed(2); // Convert number to string formatted as currency

    const getNextPaymentDate = () => {
        let date = new Date();
        date.setDate(date.getDate() + 20);
        return date.toLocaleString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    return (
        <Card size="3">
            <Flex align="center" justify="between" mb="5">
                <Heading as="h3" size="4" trim="both">
                    Membership
                </Heading>

                <Flex my="-1" gap="4">
                    <Button tabIndex={tabIndex} size="2" variant="ghost">
                        Done
                    </Button>
                </Flex>
            </Flex>

            <Flex direction="column" gap="4">
                {membershipLevels.map(level => (
                    <Flex key={level.id} align="center" justify="between">
                        <Flex direction="column" gap="1">
                          <Text size="2" weight="medium">
                            {tierTitle}
                          </Text>
                          <Text size="1" color="gray">
                            {tierDescription}
                          </Text>
                        </Flex>
                        <Flex direction="column" width="64px">
                          <Button tabIndex={tabIndex} variant="soft">
                            {formattedPrice}
                          </Button>
                        </Flex>
                      </Flex>
                    ))}
                  </Flex>
  
                  <Box my="5">
                    <Separator size="4" />
                  </Box>
  
                  <Box>
                    <Text size="2" as="p" my="3">
                      Your next payment is {formattedPrice} on{' '}
                      {getNextPaymentDate()}
                    </Text>
  
                    <Text size="2" as="p">
                      <Link href="#" onClick={(e) => e.preventDefault()} tabIndex={tabIndex}>
                        Cancel subscription
                      </Link>
                    </Text>
                  </Box>
                </Card>
    );
};

export default MembershipCard;
