const bikes = [
    { name: 'LION', url: 'mammals1.html' },
        { name: 'Tiger', url: 'mammals2.html' },
        { name: 'Elephant', url: 'mammals3.html' },
        { name: 'Bear', url: 'mammals4.html' },
        { name: 'Giraffe', url: 'mammals5.html' },
        { name: 'Kangaroo', url: 'mammals6.html' },
        { name: 'Dolphin', url: 'mammals7.html' },
        { name: 'Wolf', url: 'mammals8.html' },
        { name: 'Zebra', url: 'mammals9.html' },
        { name: 'Rhinoceros', url: 'mammals10.html' },
        { name: 'Hippopotamus', url: 'mammals11.html' },
        { name: 'Cheetah', url: 'mammals12.html' },
        { name: 'Gorilla', url: 'mammals13.html' },
        { name: 'Chimpazee', url: 'mammals14.html' },
        { name: 'Fox', url: 'mammals15.html' },
        { name: 'Moose', url: 'mammals16.html' },
        { name: 'Bison ', url: 'mammals17.html' },
        { name: 'Squirrel', url: 'mammals18.html' },
        { name: 'Rabbit', url: 'mammals19.html' },
        { name: 'Raccoon', url: 'mammals20.html' },
        { name: 'Hedgehog', url: 'mammals21.html' },
        { name: 'Platypus', url: 'mammals22.html' },
        { name: 'Sloth', url: 'mammals23.html' },
        { name: 'Anteater', url: 'mammals24.html' },
        { name: 'Koala', url: 'mammals25.html' },
        { name: 'Manatee', url: 'mammals26.html' },
        { name: 'Otter', url: 'mammals27.html' },
        { name: 'Armadillo', url: 'mammals28.html' },
        { name: 'Ocelot ', url: 'mammals29.html' },
        { name: 'Lemur', url: 'mammals30.html' },
        { name: 'Tasmania Devil', url: 'mammals31.html' },
        { name: 'Tapir', url: 'mammals32.html' },
        { name: 'Okapi', url: 'mammals33.html' },
        { name: 'Capy Bara', url: 'mammals34.html' },
        { name: 'Aardvark', url: 'mammals35.html' },
        { name: 'Bighorn Sheep ', url: 'mammals36.html' },
        { name: 'Wombat ', url: 'mammals37.html' },
        { name: 'Eagle ', url: 'birds1.html' },
        { name: 'Sparrow', url: 'birds2.html' },
        { name: 'Parrot', url: 'birds3.html' },
        { name: 'Penguin', url: 'birds4.html' },
        { name: 'Ostrich', url: 'birds5.html' },
        { name: 'Flamingo ', url: 'birds6.html' },
        { name: 'Hummingbird', url: 'birds7.html' },
        { name: 'Owl', url: 'birds8.html' },
        { name: 'Woodpecker', url: 'birds9.html' },
        { name: 'Canary', url: 'birds10.html' },
        { name: 'Dove', url: 'birds11.html' },
        { name: 'Crow', url: 'birds12.html' },
        { name: 'Seagull', url: 'birds13.html' },
        { name: 'peacock', url: 'birds14.html' },
        { name: 'Swallow ', url: 'birds15.html' },
        { name: 'Robin', url: 'birds16.html' },
        { name: 'Pigeon', url: 'birds17.html' },
        { name: 'Vulture', url: 'birds18.html' },
        { name: 'Pelican', url: 'birds19.html' },
        { name: 'Macaw ', url: 'birds20.html' },
        { name: 'Heron ', url: 'birds21.html' },
        { name: 'Finch', url: 'birds22.html' },
        { name: 'Cardinal', url: 'birds23.html' },
        { name: 'Stork ', url: 'birds24.html' },
        { name: 'Quail', url: 'birds25.html' },
        { name: 'Goose', url: 'birds26.html' },
        { name: 'Hawk', url: 'birds27.html' },
        { name: 'Kestrel ', url: 'birds28.html' },
        { name: 'Albatross', url: 'birds29.html' },
        { name: 'Kingfisher', url: 'birds30.html' },
        { name: 'Cockatoo', url: 'birds31.html' },
        { name: 'Bluejay', url: 'birds32.html' },
        { name: 'Magpie', url: 'birds33.html' },
        { name: 'Turaco', url: 'birds34.html' },
        { name: 'Tern', url: 'birds35.html' },
        { name: 'Bowerbird', url: 'birds36.html' },
        { name: 'Secretary Birds', url: 'birds37.html' },
        { name: 'Shark', url: 'aqua1.html' },
        { name: 'Dolphin', url: 'aqua2.html' },
        { name: 'Whale ', url: 'aqua3.html' },
        { name: 'Octopus', url: 'aqua4.html' },
        { name: 'Squid ', url: 'aqua5.html' },
        { name: 'Sea Horse', url: 'aqua6.html' },
        { name: 'Jelly Fisf', url: 'aqua7.html' },
        { name: 'Sea Turtle', url: 'aqua8.html' },
        { name: 'Star Fish', url: 'aqua9.html' },
        { name: 'Clown Fish', url: 'aqua10.html' },
        { name: 'Barracuda ', url: 'aqua11.html' },
        { name: 'Manta ray', url: 'aqua12.html' },
        { name: 'Lobster', url: 'aqua13.html' },
        { name: 'Crab', url: 'aqua14.html' },
        { name: 'Sea Urchin', url: 'aqua15.html' },
        { name: 'Anemone ', url: 'aqua16.html' },
        { name: 'Moray Eel', url: 'aqua17.html' },
        { name: 'Angelfish ', url: 'aqua18.html' },
        { name: 'Swordfish ', url: 'aqua19.html' },
        { name: 'Tuna ', url: 'aqua20.html' },
        { name: 'Sea Cucumber', url: 'aqua21.html' },
        { name: 'Manateee', url: 'aqua22.html' },
        { name: 'Sea Lion', url: 'aqua23.html' },
        { name: 'Narwhal', url: 'aqua24.html' },
        { name: 'Beluga Whale', url: 'aqua25.html' },
        { name: 'Coral', url: 'aqua26.html' },
        { name: 'Lanternfish', url: 'aqua27.html' },
        { name: 'Puffin ', url: 'aqua28.html' },
        { name: 'Blue Whale', url: 'aqua29.html' },
        { name: 'Oar Fish', url: 'aqua30.html' },
        { name: 'Bottle Nose-Dolphin', url: 'aqua31.html' },
        { name: 'Cleaner Shrimp', url: 'aqua32.html' },
        { name: 'Goby Fish', url: 'aqua33.html' },
        { name: 'Electric Eel', url: 'aqua34.html' },
        { name: 'Puffer Fish', url: 'aqua35.html' },
        { name: 'Grouper ', url: 'aqua36.html' },
        { name: 'Trigger Fish', url: 'aqua37.html' },
        { name: 'Alligator', url: 'reptiles1.html' },
        { name: 'crocodile', url: 'reptiles2.html' },
        { name: 'Turtle ', url: 'reptiles3.html' },
        { name: 'Tortoise', url: 'reptiles4.html' },
        { name: 'Iguana', url: 'reptiles5.html' },
        { name: 'Gecko', url: 'reptiles6.html' },
        { name: 'Chameleon', url: 'reptiles7.html' },
        { name: 'Python', url: 'reptiles8.html' },
        { name: 'Rattle Snake', url: 'reptiles9.html' },
        { name: 'Cobra', url: 'reptiles10.html' },
        { name: 'Monitor Lizard', url: 'reptiles11.html' },
        { name: 'Anole', url: 'reptiles12.html' },
        { name: 'Komodo Dragon', url: 'reptiles13.html' },
        { name: 'Gila Monster', url: 'reptiles14.html' },
        { name: 'Box Turtle', url: 'reptiles15.html' },
        { name: 'Horned Lizard', url: 'reptiles16.html' },
        { name: 'Skink', url: 'reptiles17.html' },
        { name: 'Viper', url: 'reptiles18.html' },
        { name: 'Tuatara', url: 'reptiles19.html' },
        { name: 'Blue Racer', url: 'reptiles20.html' },
        { name: 'Water Snake', url: 'reptiles21.html' },
        { name: 'Tree Boa', url: 'reptiles22.html' },
        { name: 'Eastern Diamondback Rattlesnake', url: 'reptiles23.html' },
        { name: 'King Snake', url: 'reptiles24.html' },
        { name: 'Green Iguana', url: 'reptiles25.html' },
        { name: 'Frilled Lizard', url: 'reptiles26.html' },
        { name: 'Olive Ridley Turtle', url: 'reptiles27.html' },
        { name: 'Leatherback Turtle', url: 'reptiles28.html' },
        { name: 'Cottonmouth', url: 'reptiles29.html' },
        { name: 'Bearded Dragon', url: 'reptiles30.html' },
        { name: 'Spiny Lizard', url: 'reptiles31.html' },
        { name: 'Chuckwala', url: 'reptiles32.html' },
        { name: 'Sidewinder Rattle Snake', url: 'reptiles33.html' },
        { name: 'Rat snake', url: 'reptiles34.html' },
        { name: 'Red eared slider', url: 'reptiles35.html' },
        { name: 'Nile Monitor', url: 'reptiles36.html' },
        { name: 'Sand Boa', url: 'reptiles37.html' },
        
    ];
  
    const dropdownContent = document.getElementById('dropdownContent');
  
    // Populate dropdown with bike names
    bikes.forEach(bike => {
      const a = document.createElement('a');
      a.textContent = bike.name;
      a.href = bike.url;
      dropdownContent.appendChild(a);
    });
  
    function filterFunction() {
      const input = document.getElementById('searchInput');
      const filter = input.value.toUpperCase();
      const links = dropdownContent.getElementsByTagName('a');
      
      dropdownContent.style.display = input.value ? 'block' : 'none';  // Show dropdown if input is not empty
  
      for (let i = 0; i < links.length; i++) {
        const txtValue = links[i].textContent || links[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          links[i].style.display = '';
        } else {
          links[i].style.display = 'none';
        }
      }
    }
