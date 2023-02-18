const guides = document.getElementById('guides');

const guidesArray = [
  {
    name: 'Mikhail Rodrigues',
    picture: 'images/Guyanese-Critics.jpg',
    profession: 'Social Media Influencer',
    description: 'Journalist, groundman for the truth, a sensation to the people. The Guyanese Critics.',
  },
  {
    name: 'Clinton Younge',
    picture: 'images/Driver.jpg',
    profession: 'Entrepreneur/Driver',
    description: 'Entrepreneur who has his hand in many different fields. Our main driver for the event.',
  },
  {
    name: 'Delvin Adams',
    picture: 'images/Delvin-Adams-Chef.jpg',
    profession: 'Master Chef',
    description: "Master of the kitchen, savior our tastebuds have been waiting for. The chef that'll have you taste Guyana.",
  },
  {
    name: 'Poonam Singh',
    picture: 'images/Poonam-Singh.jpg',
    profession: "Guyana's #1 Singer",
    description: 'An ethereal beauty with a voice so mellow. Come listen as she sings her hit single "Guyana".',
  },
  {
    name: 'Ivan Sancho',
    picture: 'images/Ivan-Sancho-Craftsman.jpg',
    profession: 'Master Craftsman',
    description: 'Master of his craft. Ivan Sancho will showcase the skill of craftmaking only a man of his calibur and experience can showcase.',
  },
  {
    name: 'His Excellency, President Irfaan Ali',
    picture: 'images/His-Excellency.png',
    profession: 'President of Guyana',
    description: 'His Excellency, Dr. Mohamed Irfaan Ali, 10th and current president of Guyana since 2020.',
  },
];

window.addEventListener('load', (() => {
  let content = '';
  guidesArray.forEach((guide) => {
    content += `<div class="guide">
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
  guides.innerHTML = content;
  content = '';
}));