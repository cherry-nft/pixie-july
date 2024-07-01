const songsQueue = [
    {
      name: 'The Less I Know the Better',
      artist: 'Tame Impala',
      album: 'Currents',
      length: '3:39',
      cover:
        'https://workos.imgix.net/images/79645741-51e0-47fc-bb40-2fa66cf9f68e.png?auto=format&fit=clip&q=80&w=192',
      color: 'hsl(339, 80%, 60%)',
    },
    {
      name: 'Pieces',
      artist: 'Villagers',
      album: 'Becoming a Jackal',
      length: '5:25',
      cover:
        'https://workos.imgix.net/images/95ff9b99-36f3-46d8-a3fe-9387fd7c3c32.png?auto=format&fit=clip&q=80&w=192',
      color: 'hsl(356, 80%, 31%)',
    },
    {
      name: 'Cola',
      artist: 'Arlo Parks',
      album: 'Super Sad Generation',
      length: '3:50',
      cover:
        'https://workos.imgix.net/images/945c66a9-afd9-4b1c-8eb0-4ce3992731ca.png?auto=format&fit=clip&q=80&w=192',
      color: 'hsl(315, 90%, 70%, 0.2)',
    },
    {
      name: 'Do the Astral Plane',
      artist: 'Flying Lotus',
      album: 'Cosmogramma',
      length: '3:58',
      cover:
        'https://workos.imgix.net/images/3d9075e4-c232-4fb5-a1a4-b0a33d669192.png?auto=format&fit=clip&q=80&w=192',
      color: 'hsl(80, 9%, 66%)',
    },
    {
      name: 'Left Hand Free',
      artist: 'Alt-J',
      album: 'This Is All Yours',
      length: '2:54',
      cover:
        'https://workos.imgix.net/images/8d431b64-ebe8-41be-b986-2f59cb5c567d.png?auto=format&fit=clip&q=80&w=192',
      color: 'hsl(330, 70%, 64%)',
    },
  ];
  
  const songsHistory = [
    {
      name: 'Sunday Rain',
      artist: 'Foo Fighters',
      album: 'Concrete and Gold',
      length: '6:11',
      cover:
        'https://workos.imgix.net/images/28bf3f7c-4ad7-4bd9-9064-c63d2676c8dd.png?auto=format&fit=clip&q=80&w=192',
      color: 'hsl(40, 30%, 55%)',
    },
    {
      name: 'Left Hand Free',
      artist: 'Alt-J',
      album: 'This Is All Yours',
      length: '2:54',
      cover:
        'https://workos.imgix.net/images/8d431b64-ebe8-41be-b986-2f59cb5c567d.png?auto=format&fit=clip&q=80&w=192',
      color: 'hsl(330, 70%, 64%)',
    },
    {
      name: 'Last',
      artist: 'Nine Inch Nails',
      album: 'Broken',
      length: '4:45',
      cover:
        'https://workos.imgix.net/images/5f495e55-4bac-4573-b97f-bac55d4f3a82.png?auto=format&fit=clip&q=80&w=192',
      color: 'hsl(30, 100%, 50%)',
    },
    {
      name: '13LACK 13ALLOONZ (feat. Twelve’len & GoldLink)',
      artist: 'Denzel Curry',
      album: 'TA13OO',
      length: '3:31',
      cover:
        'https://workos.imgix.net/images/f1b1ff42-eae9-4fcd-9c7f-c3ed92594395.png?auto=format&fit=clip&q=80&w=192',
      color: 'hsl(0, 0%, 25%)',
    },
    {
      name: 'Self Control',
      artist: 'Frank Ocean',
      album: 'Blond',
      length: '4:10',
      cover:
        'https://workos.imgix.net/images/419f09bc-99ab-4eae-8e71-d33f0577bd47.png?auto=format&fit=clip&q=80&w=192',
      color: 'hsl(80, 20%, 40%)',
    },
    {
      name: 'Trippy (feat. J. Cole)',
      artist: 'Anderson .Paak',
      album: 'Oxnard',
      length: '5:24',
      cover:
        'https://workos.imgix.net/images/daab7042-222f-433f-abcb-15811b8a43da.png?auto=format&fit=clip&q=80&w=192',
      color: 'hsl(193, 15%, 45%)',
    },
    {
      name: 'Nightclubbing',
      artist: 'Iggy Pop',
      album: 'The Idiot',
      length: '4:16',
      cover:
        'https://workos.imgix.net/images/85451af7-27bf-4bbb-88e7-088caf762ed5.png?auto=format&fit=clip&q=80&w=192',
      color: 'hsl(34, 7%, 45%)',
    },
    {
      name: 'Heaven Beside You',
      artist: 'Alice in Chains',
      album: 'Alice in Chains',
      length: '5:28',
      cover:
        'https://workos.imgix.net/images/72edfcaf-2e5b-492c-bb5b-60a031f001c9.png?auto=format&fit=clip&q=80&w=192',
      color: 'hsl(289, 3%, 51%)',
    },
    {
      name: 'Night After Night',
      artist: 'Laura Marling',
      album: 'A Creature I Don’t Know',
      length: '5:08',
      cover:
        'https://workos.imgix.net/images/0cce32ae-6890-419e-b01c-2e89d36cb883.png?auto=format&fit=clip&q=80&w=192',
      color: 'hsl(40, 13%, 83%)',
    },
    {
      name: 'HEAVN',
      artist: 'Jamila Woods',
      album: 'HEAVN',
      length: '4:23',
      cover:
        'https://workos.imgix.net/images/e865c892-5cbe-4d1f-b4eb-e2bc301087f0.png?auto=format&fit=clip&q=80&w=192',
      color: 'hsl(32, 95%, 67%)',
    },
  ];
  
  const albumsFavorites = [
    {
      name: 'Blond',
      artist: 'Frank Ocean',
      cover:
        'https://workos.imgix.net/images/419f09bc-99ab-4eae-8e71-d33f0577bd47.png?auto=format&fit=clip&q=80&w=500',
      color: 'hsl(0, 0%, 50%, 0.2)',
    },
    {
      name: 'Konoyo',
      artist: 'Tim Hecker',
      cover:
        'https://workos.imgix.net/images/d2e1f2a4-5994-4f38-b3f4-0c78c946b616.png?auto=format&fit=clip&q=80&w=500',
      color: 'hsl(210, 30%, 40%)',
    },
    {
      name: 'Los Angeles',
      artist: 'Flying Lotus',
      cover:
        'https://workos.imgix.net/images/29a1153b-e12a-45d8-95a7-812657566204.png?auto=format&fit=clip&q=80&w=500',
      color: 'hsl(200, 30%, 20%, 0.2)',
    },
    {
      name: 'The Fragile',
      artist: 'Nine Inch Nails',
      cover:
        'https://workos.imgix.net/images/c33df9ee-0126-450b-ac7c-df1b76fc12da.png?auto=format&fit=clip&q=80',
      color: 'hsl(15, 80%, 50%)',
    },
    {
      name: 'Sketches of Spain',
      artist: 'Miles Davis',
      cover:
        'https://workos.imgix.net/images/bc4dcddb-c350-413b-bc1f-38126cf9015b.png?auto=format&fit=clip&q=80&w=500',
      color: 'hsl(35, 100%, 50%)',
    },
  ];
  
  const playlistsForYou = [
    {
      title: 'Rebellious ’90s and ’00s',
      caption: 'Throwback to the teenage years',
      cover:
        'https://workos.imgix.net/images/ea236dea-fd26-4972-9430-d2677457bd0a.png?auto=format&fit=clip&q=80&w=500',
      color: 'hsl(36, 70%, 50%)',
    },
    {
      title: 'Soft Rock',
      caption: 'Songs you can’t go wrong with',
      cover:
        'https://workos.imgix.net/images/9488cafc-5341-4164-a292-e34bf21dfbd5.png?auto=format&fit=clip&q=80&w=500',
      color: 'hsl(235, 50%, 40%, 0.4)',
    },
    {
      title: 'Trip-Hop Essentials',
      caption: 'Dark and moody grooves',
      cover:
        'https://workos.imgix.net/images/dae75b0e-081b-43db-9984-b920de71e028.png?auto=format&fit=clip&q=80&w=500',
      color: 'hsl(230, 100%, 50%, 0.3)',
    },
    {
      title: 'Vintage Jazz',
      caption: 'Travel through the times',
      cover:
        'https://workos.imgix.net/images/543ebff8-5f5c-4278-abb3-e1f17b723c30.png?auto=format&fit=clip&q=80&w=500',
      color: 'hsl(260, 100%, 50%, 0.3)',
    },
    {
      title: 'Funk Up',
      caption: 'Irresistible beats',
      cover:
        'https://workos.imgix.net/images/01d61c66-7b4c-482d-b439-aa05f8845a55.png?auto=format&fit=clip&q=80&w=500',
      color: 'hsl(260, 100%, 50%, 0.3)',
    },
  ];
  
  const albumsFriendsListen = [
    {
      name: 'Vulgar Display of Power',
      artist: 'Pantera',
      cover:
        'https://workos.imgix.net/images/52719781-7582-49b3-9cd5-090acbab44ad.png?auto=format&fit=clip&q=80&w=500',
      color: 'hsl(5, 20%, 70%)',
    },
    {
      name: 'ONUKA',
      artist: 'ONUKA',
      cover:
        'https://workos.imgix.net/images/21f983e3-2ed2-411c-b442-ddff52e4b5fd.png?auto=format&fit=clip&q=80&w=500',
      color: 'hsl(0, 0%, 50%, 0.2)',
    },
    {
      name: 'Consolation',
      artist: 'Protomartyr',
      cover:
        'https://workos.imgix.net/images/ce6430c1-6375-4de5-b1ce-40d69872f622.png?auto=format&fit=clip&q=80&w=500',
      color: 'hsl(50, 90%, 50%)',
    },
    {
      name: 'uknowhatimsayin¿',
      artist: 'Danny Brown',
      cover:
        'https://workos.imgix.net/images/3ea72e36-fcc5-4cc4-a378-444f48a5be5d.png?auto=format&fit=clip&q=80&w=500',
      color: 'hsl(164, 85%, 50%)',
    },
    {
      name: 'Floating Points',
      artist: 'Crush',
      cover:
        'https://workos.imgix.net/images/1dfabeef-80f4-47b8-a8c4-7bec6c4b8b0d.png?auto=format&fit=clip&q=80&w=500',
      color: 'hsl(210, 40%, 50%)',
    },
  ];

  export { songsQueue, songsHistory, albumsFavorites, playlistsForYou, albumsFriendsListen };
