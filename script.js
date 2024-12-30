document.addEventListener('DOMContentLoaded', function() {
    const recipeList = document.getElementById('recipe-list');
    const searchInput = document.getElementById('search');
    const recipePopup = document.getElementById('recipe-popup');
    const closePopupButton = document.getElementById('close-popup');

     const recipes = [
        {
            id: 1,
            name: 'Paneer Butter Masala',
            image: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/An_aesthetic_Panner_Butter_Masala.jpg',
            category: 'Indian Veg',
            ingredients: ['200g paneer', '2 onions', '2 tomatoes', '50g butter', '1/2 cup cream', 'Spices'],
            instructions: `
                1. Fry onions and tomatoes in butter until soft.
                2. Blend the mixture into a smooth paste.
                3. Add garam masala and cook for 2-3 minutes.
                4. Add cream and cook until thick.
                5. Gently cook paneer in the sauce until it's soft and tender.
            `,
            time: '30 minutes'
        },
        {
            id: 2,
            name: 'Chicken Tikka Masala',
            image: 'https://img.ccnull.de/1100000/preview/1104078_18a959fa11408abc1ed1740eec0f9793.jpg',
            category: 'Indian Non-Veg',
            ingredients: ['500g chicken breast', '1 cup yogurt', '2 onions', '2 tomatoes', 'Spices'],
            instructions: `
                1. Marinate chicken in yogurt and spices for 4 hours.
                2. Grill the chicken until fully cooked.
                3. Sauté onions and tomatoes, then blend into a smooth paste.
                4. Cook the paste with spices and add the grilled chicken.
                5. Simmer until the chicken is tender and the sauce thickens.
            `,
            time: '1 hour'
        },
        {
            id: 3,
            name: 'Butter Chicken',
            image: 'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3B4MTYwMzU4OC1pbWFnZS1rd3Z4cWpjai5qcGc.jpg',
            category: 'Indian Non-Veg',
            ingredients: ['500g chicken', '3 tomatoes', '1 onion', '50g butter', '1/2 cup cream', 'Spices'],
            instructions: `
                1. Marinate chicken with spices and yogurt.
                2. Cook onions and tomatoes until soft, then blend.
                3. Cook chicken in butter until browned.
                4. Add the blended mixture and simmer with cream until thick.
                5. Serve hot with naan or rice.
            `,
            time: '45 minutes'
        },
        {
            id: 4,
            name: 'Mutton Biryani',
            image: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Biryani---story_647_032917094114.jpg',
            category: 'Indian Non-Veg',
            ingredients: ['500g mutton', '2 cups basmati rice', '3 onions', '2 tomatoes', 'Spices'],
            instructions: `
                1. Cook mutton with spices until tender.
                2. Sauté onions and tomatoes, then add to mutton.
                3. Cook rice until half done, then layer with mutton mixture.
                4. Seal the pot and cook on low heat until rice is fully cooked.
                5. Serve hot with raita.
            `,
            time: '1.5 hours'
        },
        {
            id: 5,
            name: 'Fish Curry',
            image: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Bengali_fish_curry.jpg',
            category: 'Indian Non-Veg',
            ingredients: ['500g fish', '2 onions', '2 tomatoes', 'Coconut milk', 'Spices'],
            instructions: `
                1. Marinate fish with turmeric and salt.
                2. Sauté onions and tomatoes, then blend into a paste.
                3. Cook the paste with spices and coconut milk.
                4. Add fish and simmer until cooked through.
                5. Serve with steamed rice.
            `,
            time: '40 minutes'
        },
        {
            id: 6,
            name: 'Prawn Masala',
            image: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Prawn_thokku.jpg',
            category: 'Indian Non-Veg',
            ingredients: ['500g prawns', '2 onions', '2 tomatoes', 'Coconut milk', 'Spices'],
            instructions: `
                1. Marinate prawns with turmeric and salt.
                2. Sauté onions and tomatoes, then blend into a paste.
                3. Cook the paste with spices and coconut milk.
                4. Add prawns and simmer until cooked through.
                5. Serve with steamed rice.
            `,
            time: '30 minutes'
        },
        {
            id: 7,
            name: 'Chicken Biryani',
            image: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Chicken_biryani_3.jpg',
            category: 'Indian Non-Veg',
            ingredients: ['500g chicken', '2 cups basmati rice', '3 onions', '2 tomatoes', 'Spices'],
            instructions: `
                1. Cook chicken with spices until tender.
                2. Sauté onions and tomatoes, then add to chicken.
                3. Cook rice until half done, then layer with chicken mixture.
                4. Seal the pot and cook on low heat until rice is fully cooked.
                5. Serve hot with raita.
            `,
            time: '1.5 hours'
        },
        {
            id: 8,
            name: 'Egg Curry',
            image: 'https://media.freemalaysiatoday.com/wp-content/uploads/2021/07/lifestyle-eggcurry-emel-pic-160721.jpg',
            category: 'Indian Non-Veg',
            ingredients: ['6 eggs', '2 onions', '2 tomatoes', 'Coconut milk', 'Spices'],
            instructions: `
                1. Boil eggs and peel them.
                2. Sauté onions and tomatoes, then blend into a paste.
                3. Cook the paste with spices and coconut milk.
                4. Add eggs and simmer until flavors meld.
                5. Serve with steamed rice or roti.
            `,
            time: '30 minutes'
        },
        {
            id: 9,
            name: 'Tandoori Chicken',
            image: 'https://healthyrecipesblogs.com/wp-content/uploads/2024/08/tandoori-chicken-featured-2024.jpg',
            category: 'Indian Non-Veg',
            ingredients: ['1 whole chicken', 'Yogurt', 'Spices'],
            instructions: `
                1. Marinate chicken with yogurt and spices for 6 hours.
                2. Preheat oven to 200°C.
                3. Bake the chicken for 40 minutes or until fully cooked.
                4. Serve hot with lemon wedges and onion rings.
            `,
            time: '50 minutes'
        },
        {
            id: 10,
            name: 'Lamb Rogan Josh',
            image: 'https://www.whiskaffair.com/wp-content/uploads/2023/12/Lamb-Rogan-Josh-2-3.jpg',
            category: 'Indian Non-Veg',
            ingredients: ['500g lamb', '2 onions', '2 tomatoes', 'Yogurt', 'Spices'],
            instructions: `
                1. Marinate lamb with yogurt and spices for 4 hours.
                2. Sauté onions and tomatoes, then add lamb.
                3. Cook on low heat until lamb is tender.
                4. Serve hot with naan or rice.
            `,
            time: '1.5 hours'
        },
    ];

  function displayRecipes(filteredRecipes) {
        recipeList.innerHTML = '';
        filteredRecipes.forEach(recipe => {
            const recipeItem = document.createElement('div');
            recipeItem.className = 'recipe';
            recipeItem.innerHTML = `
                <img src="${recipe.image}" alt="${recipe.name}">
                <h3>${recipe.name}</h3>
                <p>${recipe.category}</p>
                <button class="view-recipe" data-id="${recipe.id}">View Recipe</button>
            `;
            recipeList.appendChild(recipeItem);
        });

        const viewRecipeButtons = document.querySelectorAll('.view-recipe');
        viewRecipeButtons.forEach(button => {
            button.addEventListener('click', function() {
                const recipeId = this.getAttribute('data-id');
                showRecipePopup(recipeId);
            });
        });
    }

   function displayRecipes(filteredRecipes) {
        recipeList.innerHTML = '';
        filteredRecipes.forEach(recipe => {
            const recipeItem = document.createElement('div');
            recipeItem.className = 'recipe';
            recipeItem.innerHTML = `
                <img src="${recipe.image}" alt="${recipe.name}">
                <h3>${recipe.name}</h3>
                <p>${recipe.category}</p>
                <button class="view-recipe" data-id="${recipe.id}">View Recipe</button>
            `;
            recipeList.appendChild(recipeItem);
        });

        const viewRecipeButtons = document.querySelectorAll('.view-recipe');
        viewRecipeButtons.forEach(button => {
            button.addEventListener('click', function() {
                const recipeId = this.getAttribute('data-id');
                showRecipePopup(recipeId);
            });
        });
    }

    function showRecipePopup(recipeId) {
        const recipe = recipes.find(r => r.id == recipeId);
        document.getElementById('popup-title').textContent = recipe.name;
        document.getElementById('popup-image').src = recipe.image;
        document.getElementById('popup-ingredients').innerHTML = recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('');
        document.getElementById('popup-instructions').textContent = recipe.instructions;
        document.getElementById('popup-time').textContent = recipe.time;

        recipePopup.style.display = 'flex';
    }

    function hideRecipePopup() {
        recipePopup.style.display = 'none';
    }

    closePopupButton.addEventListener('click', hideRecipePopup);

    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredRecipes = recipes.filter(recipe => recipe.name.toLowerCase().includes(searchTerm));
        displayRecipes(filteredRecipes);
    });

    displayRecipes(recipes);
});