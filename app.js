const links=[
    {
      linkName:'All',
      linkUrl:'https://www.youtube.com'
    },
    {
      linkName:'Pages',
      linkUrl:'https://www.google.com'
    },
    {
      linkName:'Rhymes & Blues',
      linkUrl:'https://www.youtube.com'
    },
    {
      linkName:'Albums',
      linkUrl:'https://www.youtube.com'
    },
    {
      linkName:'Rock Music',
      linkUrl:'https://www.youtube.com'
    },
    {
      linkName:'Comedy',
      linkUrl:'https://www.youtube.com'
    },
    {
        linkName:'JavaScript',
        linkUrl:'https://www.youtube.com'
      },
      {
        linkName:'Soul Music',
        linkUrl:'https://www.youtube.com'
      },
      {
        linkName:'The Voice',
        linkUrl:'https://www.youtube.com'
      }
     
];
links.map(link =>{
    const navList=document.getElementById('list');

    const navElement = document.createElement('li');
   
    const navLink=document.createElement('a');
   
    navLink.innerHTML = link.linkName;
    navLink.setAttribute("href", link.linkUrl);

    navElement.appendChild(navLink);
    navList.appendChild(navElement);
})