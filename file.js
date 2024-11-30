export const box = document.querySelector('.container')


export const elementOne = document.querySelector('.item-one');


const firstText = document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Duis a arcu convallis, gravida purus eget, mollis diam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint est autem quidem dolorem quam nesciunt temporibus quia reiciendis perspiciatis. Iusto vitae officiis sequi ullam quam unde repellendus laudantium consectetur laborum?');

elementOne.appendChild(firstText);

box.appendChild(elementOne);

export const elementTwo = document.querySelector('.item-two');

 const secondText = document.createTextNode(`Teacher: Why are you late?

            Student: There was a man who lost a hundred dollar bill. 

            Teacher: That's nice. Were you helping him look for it?

           Student: No. I was standing on it.`);

 elementTwo.appendChild(secondText);

box.appendChild(elementTwo);

export const elementThree = document.querySelector('.item-three');

const thirdText = document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Duis a arcu convallis, gravida purus eget, mollis diam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint est autem quidem dolorem quam nesciunt temporibus quia reiciendis perspiciatis. Iusto vitae officiis sequi ullam quam unde repellendus laudantium consectetur laborum?');

elementThree.appendChild(thirdText);
 
box.appendChild(elementThree);
