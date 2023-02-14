const showAllSpeakers = document.getElementById('showAllSpeakers');
const moreSpeakers = document.getElementById('moreSpeakers');
const speakers = document.getElementById('speakers');
const otherSpeakers = document.getElementById('otherSpeakers');

const guidesArray = [
  {
    name: 'Mikhail Rodrigues',
    picture: 'images/Guyanese-Critics.jpg',
    profession: 'Social Media Influencer',
    description: 'Excellent knowledge of JavaScript/TypeScript, HTML and CSS. Provides mentorship and supervise developers',
  },
  {
    name: 'Clinton Younge',
    picture: 'images/Driver.jpg',
    profession: 'Entrepreneur/Driver',
    description: 'Excellent knowledge of JavaScript/TypeScript, HTML and CSS. Provides mentorship and supervise developers',
  },
  {
    name: 'Delvin Adams',
    picture: 'images/Delvin-Adams-Chef.jpg',
    profession: 'Master Chef',
    description: 'Excellent knowledge of JavaScript/TypeScript, HTML and CSS. Provides mentorship and supervise developers',
  },
  {
    name: 'Poonam Singh',
    picture: 'images/Poonam-Singh.jpg',
    profession: "Guyana's #1 Singer",
    description: 'Excellent knowledge of JavaScript/TypeScript, HTML and CSS. Provides mentorship and supervise developers',
  },
  {
    name: 'Ivan Sancho',
    picture: 'images/Ivan-Sancho-Craftsman.jpg',
    profession: 'Master Craftsman',
    description: 'Excellent knowledge of JavaScript/TypeScript, HTML and CSS. Provides mentorship and supervise developers',
  },
  {
    name: 'His Excellency, President Irfan Ali',
    picture: 'images/His-Excellency.png',
    profession: 'President of Guyana',
    description: 'Excellent knowledge of JavaScript/TypeScript, HTML and CSS. Provides mentorship and supervise developers',
  },
];

window.addEventListener('load', (() => {
  let toAdd = '';
  guidesArray.forEach((guide) => {
    toAdd += `<div class="speaker">
                <div class="image">
                    <img src="${guide.picture}" alt="Image of an Islamic speaker">
                </div>
                <span>
                    <h4>${guide.name}</h4>
                    <p>${guide.profession}</p>
                    <p>${guide.description}</p>
                </span>
               </div>`;
  });
  speakers.innerHTML = toAdd;
  toAdd = '';
}));