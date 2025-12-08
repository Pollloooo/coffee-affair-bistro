// data-manager.js

// This function initializes our "database" with the full menu data.

function initializeData() {
    // Initialize Menu if not present
    if (!localStorage.getItem('bistroMenu')) {
        const defaultMenu = [
            // --- COFFEE ---
            { id: 1, name: 'Americano', description: 'Rich, full-bodied espresso with hot water.', price: 65.00, imageUrl: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=600', category: 'Coffee' },
            { id: 2, name: 'Cafe Latte', description: 'Espresso with steamed milk and a light layer of foam.', price: 75.00, imageUrl: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600', category: 'Coffee' },
            { id: 3, name: 'Cappuccino', description: 'Espresso topped with a deep, frothy layer of milk foam.', price: 75.00, imageUrl: 'https://images.unsplash.com/photo-1557006021-b96020880b42?auto=format&fit=crop&w=600', category: 'Coffee' },
            { id: 4, name: 'Mocha', description: 'A delightful mix of espresso, steamed milk, and chocolate.', price: 79.00, imageUrl: 'https://images.unsplash.com/photo-1572442388796-11668a67e504?auto=format&fit=crop&w=600', category: 'Coffee' },
            { id: 5, name: 'White Mocha', description: 'Espresso with steamed milk and sweet white chocolate sauce.', price: 79.00, imageUrl: 'https://images.unsplash.com/photo-1545665225-b23b99e4d45e?auto=format&fit=crop&w=600', category: 'Coffee' },
            { id: 6, name: 'Spanish Latte', description: 'A sweet and creamy latte made with condensed milk.', price: 85.00, imageUrl: 'https://images.unsplash.com/photo-1621281834928-3f8b355e78be?auto=format&fit=crop&w=600', category: 'Coffee' },
            { id: 7, name: 'Cafe Dalgona', description: 'Whipped instant coffee cream over iced milk.', price: 85.00, imageUrl: 'https://images.unsplash.com/photo-1589923188900-85dae523342d?auto=format&fit=crop&w=600', category: 'Coffee' },
            { id: 8, name: 'Brown Sugar Latte', description: 'Espresso and milk sweetened with rich brown sugar syrup.', price: 85.00, imageUrl: 'https://images.unsplash.com/photo-1617420335912-070369874a73?auto=format&fit=crop&w=600', category: 'Coffee' },
            { id: 9, name: 'Vanilla Latte', description: 'Our classic latte with a sweet hint of vanilla.', price: 85.00, imageUrl: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600', category: 'Coffee' },
            { id: 10, name: 'Caramel Macchiato', description: 'Steamed milk, vanilla, espresso, and a caramel drizzle.', price: 89.00, imageUrl: 'https://images.unsplash.com/photo-1598714376241-5586414771a3?auto=format&fit=crop&w=600', category: 'Coffee' },
            { id: 11, name: 'Hazelnut Macchiato', description: 'A nutty twist on our classic caramel macchiato.', price: 89.00, imageUrl: 'https://images.unsplash.com/photo-1579982433051-175a13a5252a?auto=format&fit=crop&w=600', category: 'Coffee' },
            { id: 12, name: 'Nutella Latte', description: 'A decadent latte made with real Nutella spread.', price: 90.00, imageUrl: 'https://images.unsplash.com/photo-1622359539498-5407d1591494?auto=format&fit=crop&w=600', category: 'Coffee' },
            { id: 13, name: 'Biscoff Latte', description: 'Creamy latte infused with the flavor of Biscoff cookies.', price: 90.00, imageUrl: 'https://images.unsplash.com/photo-1621292881263-6a5e1e0e8838?auto=format&fit=crop&w=600', category: 'Coffee' },
            
            // --- NON-COFFEE ---
            { id: 14, name: 'Milk', description: 'Fresh and creamy milk, served hot or cold.', price: 75.00, imageUrl: 'https://images.unsplash.com/photo-1559598467-f8b76c8155d0?auto=format&fit=crop&w=600', category: 'Non-Coffee' },
            { id: 15, name: 'Dark Chocolate', description: 'Rich, decadent dark chocolate drink.', price: 80.00, imageUrl: 'https://images.unsplash.com/photo-1542355928-b4c4a4294697?auto=format&fit=crop&w=600', category: 'Non-Coffee' },
            { id: 16, name: 'Strawberry Cream', description: 'A creamy and fruity strawberry beverage.', price: 95.00, imageUrl: 'https://images.unsplash.com/photo-1610412891223-5e9343642cf4?auto=format&fit=crop&w=600', category: 'Non-Coffee' },
            { id: 17, name: 'Choco Milo Smores', description: 'A campfire classic in a cup with Milo and marshmallows.', price: 95.00, imageUrl: 'https://images.unsplash.com/photo-1579753444085-f125a65c9a09?auto=format&fit=crop&w=600', category: 'Non-Coffee' },
            
            // --- TEA ---
            { id: 18, name: 'Chamomile Tea', description: 'A calming and aromatic herbal tea.', price: 65.00, imageUrl: 'https://images.unsplash.com/photo-1578899842423-e22f0f49370b?auto=format&fit=crop&w=600', category: 'Tea' },
            { id: 19, name: 'Peppermint Tea', description: 'A refreshing and invigorating mint tea.', price: 65.00, imageUrl: 'https://images.unsplash.com/photo-1556740738-48f5a6a6a1d8?auto=format&fit=crop&w=600', category: 'Tea' },
            { id: 20, name: 'Green Tea', description: 'A classic, healthy green tea with a delicate flavor.', price: 65.00, imageUrl: 'https://images.unsplash.com/photo-1627435601361-ec25f24744d9?auto=format&fit=crop&w=600', category: 'Tea' },
            { id: 21, name: 'Matcha Latte', description: 'Earthy matcha green tea with steamed milk.', price: 90.00, imageUrl: 'https://images.unsplash.com/photo-1576426863848-c21f68b20b20?auto=format&fit=crop&w=600', category: 'Tea' },
            { id: 22, name: 'Dalgona Matcha', description: 'Whipped matcha cream over iced milk.', price: 90.00, imageUrl: 'https://images.unsplash.com/photo-1589923188900-85dae523342d?auto=format&fit=crop&w=600', category: 'Tea' },
            { id: 23, name: 'Spanish Matcha', description: 'A sweeter, creamier take on the classic matcha latte.', price: 95.00, imageUrl: 'https://images.unsplash.com/photo-1576426863848-c21f68b20b20?auto=format&fit=crop&w=600', category: 'Tea' },
            
            // --- SIGNATURE DRINKS ---
            { id: 24, name: 'Brown Sugar Milk Tea', description: 'Classic milk tea with brown sugar syrup and pearls.', price: 115.00, imageUrl: 'https://images.unsplash.com/photo-1585882415755-c25783c37340?auto=format&fit=crop&w=600', category: 'Signature Drinks' },
            { id: 25, name: 'Thai Milk Tea', description: 'Sweet and creamy, authentically brewed Thai tea.', price: 115.00, imageUrl: 'https://images.unsplash.com/photo-1599159518115-433b5a935475?auto=format&fit=crop&w=600', category: 'Signature Drinks' },
            { id: 26, name: 'Cucumber Lime Tea', description: 'A uniquely refreshing iced tea.', price: 129.00, imageUrl: 'https://images.unsplash.com/photo-1556740738-48f5a6a6a1d8?auto=format&fit=crop&w=600', category: 'Signature Drinks' },
            { id: 27, name: 'Honey Lemon Tea', description: 'Soothing hot tea with natural honey and lemon.', price: 129.00, imageUrl: 'https://images.unsplash.com/photo-1578899842423-e22f0f49370b?auto=format&fit=crop&w=600', category: 'Signature Drinks' },
            { id: 28, name: 'Orange Americano', description: 'Iced americano with a twist of fresh orange.', price: 135.00, imageUrl: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=600', category: 'Signature Drinks' },
            { id: 29, name: 'Choco Matcha', description: 'A perfect blend of earthy matcha and rich chocolate.', price: 145.00, imageUrl: 'https://images.unsplash.com/photo-1576426863848-c21f68b20b20?auto=format&fit=crop&w=600', category: 'Signature Drinks' },
            { id: 30, name: 'Dirty Matcha', description: 'A matcha latte with a shot of espresso.', price: 145.00, imageUrl: 'https://images.unsplash.com/photo-1576426863848-c21f68b20b20?auto=format&fit=crop&w=600', category: 'Signature Drinks' },
            
            // --- APPETIZERS ---
            { id: 31, name: 'Cheese Fries', description: 'Crispy fries smothered in warm cheese sauce.', price: 99.00, imageUrl: 'https://images.unsplash.com/photo-1598679253544-2c9741991adf?auto=format&fit=crop&w=600', category: 'Appetizers' },
            { id: 32, name: 'BBQ Fries', description: 'Fries tossed in a smoky BBQ seasoning.', price: 99.00, imageUrl: 'https://images.unsplash.com/photo-1598679253544-2c9741991adf?auto=format&fit=crop&w=600', category: 'Appetizers' },
            { id: 33, name: 'Sour Cream Fries', description: 'Crispy fries served with a side of sour cream and chives.', price: 109.00, imageUrl: 'https://images.unsplash.com/photo-1598679253544-2c9741991adf?auto=format&fit=crop&w=600', category: 'Appetizers' },
            { id: 34, name: 'Truffle Parmesan Fries', description: 'Fries drizzled with truffle oil and topped with Parmesan.', price: 119.00, imageUrl: 'https://images.unsplash.com/photo-1598679253544-2c9741991adf?auto=format&fit=crop&w=600', category: 'Appetizers' },
            { id: 35, name: 'Creamy Mushroom Soup', description: 'A warm and hearty soup made with fresh mushrooms.', price: 119.00, imageUrl: 'https://images.unsplash.com/photo-1559525283-a4e9b5f92f6a?auto=format&fit=crop&w=600', category: 'Appetizers' },
            { id: 36, name: 'Chicken Caesar Salad', description: 'Classic Caesar salad with grilled chicken strips.', price: 129.00, imageUrl: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=600', category: 'Appetizers' },
            { id: 37, name: 'Chicken Goujons', description: 'Crispy chicken tenders served with a dip.', price: 149.00, imageUrl: 'https://images.unsplash.com/photo-1626082910747-3d1d7a3c4f8c?auto=format&fit=crop&w=600', category: 'Appetizers' },
            { id: 38, name: 'Chick n\' Chips', description: 'Classic fish and chips, but with chicken.', price: 175.00, imageUrl: 'https://images.unsplash.com/photo-1626082910747-3d1d7a3c4f8c?auto=format&fit=crop&w=600', category: 'Appetizers' },
            { id: 39, name: 'Nacho Supreme', description: 'Tortilla chips loaded with cheese, salsa, and sour cream.', price: 175.00, imageUrl: 'https://images.unsplash.com/photo-1570417933497-282f186cec62?auto=format&fit=crop&w=600', category: 'Appetizers' },

            // --- BURGER & SANDWICH ---
            { id: 40, name: 'Chicken Sandwich', description: 'A simple yet delicious grilled chicken sandwich.', price: 145.00, imageUrl: 'https://images.unsplash.com/photo-1592415486689-125c994e073c?auto=format&fit=crop&w=600', category: 'Burger & Sandwich' },
            { id: 41, name: 'Ham & Egg Sandwich', description: 'A breakfast classic, perfect any time of day.', price: 135.00, imageUrl: 'https://images.unsplash.com/photo-1553909489-cd47e0907910?auto=format&fit=crop&w=600', category: 'Burger & Sandwich' },
            { id: 42, name: 'Clubhouse Sandwich', description: 'A triple-decker sandwich with chicken, bacon, lettuce, and tomato.', price: 189.00, imageUrl: 'https://images.unsplash.com/photo-1592415486689-125c994e073c?auto=format&fit=crop&w=600', category: 'Burger & Sandwich' },
            { id: 43, name: 'Kimchi Burger', description: 'A juicy beef patty topped with spicy kimchi.', price: 175.00, imageUrl: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=600', category: 'Burger & Sandwich' },
            { id: 44, name: 'Texas BBQ Burger', description: 'Beef patty with bacon, cheese, and smoky BBQ sauce.', price: 185.00, imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600', category: 'Burger & Sandwich' },
            { id: 45, name: 'Ultimate Double Cheese', description: 'Two beef patties, double the cheese.', price: 215.00, imageUrl: 'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?auto=format&fit=crop&w=600', category: 'Burger & Sandwich' },

            // --- PASTA ---
            { id: 46, name: 'Aglio Olio', description: 'Spaghetti in sauteed garlic and olive oil.', price: 159.00, imageUrl: 'https://images.unsplash.com/photo-1621996346565-e326b20f5444?auto=format&fit=crop&w=600', category: 'Pasta' },
            { id: 47, name: 'Spaghetti ala Carbonara', description: 'Spaghetti in a creamy sauce with bacon.', price: 175.00, imageUrl: 'https://images.unsplash.com/photo-1588013273468-4113a4ea1323?auto=format&fit=crop&w=600', category: 'Pasta' },
            { id: 48, name: 'Black Calamari Pasta', description: 'Squid ink pasta with tender calamari rings.', price: 190.00, imageUrl: 'https://images.unsplash.com/photo-1621996346565-e326b20f5444?auto=format&fit=crop&w=600', category: 'Pasta' },
            { id: 49, name: 'Seafood Fettuccine', description: 'Flat pasta with sauteed mixed seafood in tomato sauce.', price: 190.00, imageUrl: 'https://images.unsplash.com/photo-1563379926898-059e56e5df85?auto=format&fit=crop&w=600', category: 'Pasta' },
            { id: 50, name: 'Chicken Pesto Pasta', description: 'Home-made Pesto sauce with pan-grilled chicken.', price: 190.00, imageUrl: 'https://images.unsplash.com/photo-1608889980039-b14973417533?auto=format&fit=crop&w=600', category: 'Pasta' },
            { id: 51, name: 'Chicken Mushroom Alfredo', description: 'Signature creamy alfredo sauce with chicken and mushroom.', price: 190.00, imageUrl: 'https://images.unsplash.com/photo-1611270629569-b5741634a4a3?auto=format&fit=crop&w=600', category: 'Pasta' },
            { id: 52, name: 'Beef Bolognese', description: 'Pasta with classic beef and tomato sauce.', price: 199.00, imageUrl: 'https://images.unsplash.com/photo-1598866594240-a626a459dfa5?auto=format&fit=crop&w=600', category: 'Pasta' },
            { id: 53, name: 'Seafood Olio', description: 'Pasta sauteed with mixed seafood in garlic, chili, and olive oil.', price: 199.00, imageUrl: 'https://images.unsplash.com/photo-1563379926898-059e56e5df85?auto=format&fit=crop&w=600', category: 'Pasta' },
            
            // --- DESSERTS ---
            { id: 54, name: 'Affogato', description: 'A scoop of vanilla ice cream drowned in hot espresso.', price: 99.00, imageUrl: 'https://images.unsplash.com/photo-1579954115564-d6b9a8e3a2d5?auto=format&fit=crop&w=600', category: 'Desserts' },
            { id: 55, name: 'Banana Sundae', description: 'Classic banana split sundae.', price: 99.00, imageUrl: 'https://images.unsplash.com/photo-1579954115564-d6b9a8e3a2d5?auto=format&fit=crop&w=600', category: 'Desserts' },
            { id: 56, name: 'Belgian Waffles', description: 'Crispy waffles served with your choice of syrup.', price: 135.00, imageUrl: 'https://images.unsplash.com/photo-1562376552-0d160a2f86d7?auto=format&fit=crop&w=600', category: 'Desserts' },
            { id: 57, name: 'Biscoff Caramel Waffles', description: 'Waffles topped with Biscoff spread and caramel.', price: 145.00, imageUrl: 'https://images.unsplash.com/photo-1562376552-0d160a2f86d7?auto=format&fit=crop&w=600', category: 'Desserts' },
            { id: 58, name: 'Waffles & Ice Cream', description: 'Warm waffles served with a scoop of vanilla ice cream.', price: 145.00, imageUrl: 'https://images.unsplash.com/photo-1562376552-0d160a2f86d7?auto=format&fit=crop&w=600', category: 'Desserts' },
            { id: 59, name: 'Nutella Waffles', description: 'Waffles smothered in delicious Nutella.', price: 145.00, imageUrl: 'https://images.unsplash.com/photo-1562376552-0d160a2f86d7?auto=format&fit=crop&w=600', category: 'Desserts' },
            { id: 60, name: 'Hot Fudge Brownie', description: 'A warm brownie topped with ice cream and hot fudge.', price: 159.00, imageUrl: 'https://images.unsplash.com/photo-1567602339513-d1a2386412e4?auto=format&fit=crop&w=600', category: 'Desserts' },

             // --- FRUITY OPTIONS ---
            { id: 61, name: 'Green Apple Lemon Soda', description: 'Tart and refreshing sparkling soda.', price: 115.00, imageUrl: 'https://images.unsplash.com/photo-1543364195-bfe6e4932397?auto=format&fit=crop&w=600', category: 'Fruity Options' },
            { id: 62, name: 'Blueberry Lemon Soda', description: 'Sweet blueberry meets zesty lemon.', price: 115.00, imageUrl: 'https://images.unsplash.com/photo-1543364195-bfe6e4932397?auto=format&fit=crop&w=600', category: 'Fruity Options' },
            { id: 63, name: 'Orange Lemon Soda', description: 'A citrus blast of orange and lemon.', price: 125.00, imageUrl: 'https://images.unsplash.com/photo-1543364195-bfe6e4932397?auto=format&fit=crop&w=600', category: 'Fruity Options' },
            { id: 64, name: 'Mango Fizz', description: 'A tropical sparkling mango drink.', price: 125.00, imageUrl: 'https://images.unsplash.com/photo-1543364195-bfe6e4932397?auto=format&fit=crop&w=600', category: 'Fruity Options' },
            { id: 65, name: 'Strawberry Fizz', description: 'Bubbly and sweet strawberry soda.', price: 145.00, imageUrl: 'https://images.unsplash.com/photo-1543364195-bfe6e4932397?auto=format&fit=crop&w=600', category: 'Fruity Options' },
            { id: 66, name: 'Banoffee Smoothie', description: 'A delicious blend of banana and toffee.', price: 145.00, imageUrl: 'https://images.unsplash.com/photo-1610970878459-a0e259d0a0e5?auto=format&fit=crop&w=600', category: 'Fruity Options' },
            { id: 67, name: 'Strawberry Smoothie', description: 'A classic smoothie made with real strawberries.', price: 145.00, imageUrl: 'https://images.unsplash.com/photo-1610970878459-a0e259d0a0e5?auto=format&fit=crop&w=600', category: 'Fruity Options' },
            { id: 68, name: 'Mango Smoothie', description: 'A creamy and tropical mango smoothie.', price: 145.00, imageUrl: 'https://images.unsplash.com/photo-1610970878459-a0e259d0a0e5?auto=format&fit=crop&w=600', category: 'Fruity Options' },
            { id: 69, name: 'Mix Berry Smoothie', description: 'A blend of assorted berries for a healthy treat.', price: 155.00, imageUrl: 'https://images.unsplash.com/photo-1610970878459-a0e259d0a0e5?auto=format&fit=crop&w=600', category: 'Fruity Options' },
            { id: 70, name: 'Banana Mango Smoothie', description: 'A perfect tropical mix of banana and mango.', price: 155.00, imageUrl: 'https://images.unsplash.com/photo-1610970878459-a0e259d0a0e5?auto=format&fit=crop&w=600', category: 'Fruity Options' },

            // --- SIGNATURE MILKSHAKES ---
            { id: 71, name: 'Vanilla Classic', description: 'A timeless, creamy vanilla milkshake.', price: 145.00, imageUrl: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600', category: 'Signature Milkshakes' },
            { id: 72, name: 'Chocolate Classic', description: 'A rich and classic chocolate milkshake.', price: 145.00, imageUrl: 'https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?auto=format&fit=crop&w=600', category: 'Signature Milkshakes' },
            { id: 73, name: 'Coffee Classic', description: 'For the coffee lover, a coffee-flavored milkshake.', price: 155.00, imageUrl: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600', category: 'Signature Milkshakes' },
            { id: 74, name: 'Dalgona Crunch', description: 'A milkshake with crunchy Dalgona candy pieces.', price: 159.00, imageUrl: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600', category: 'Signature Milkshakes' },
            { id: 75, name: 'Oreo Blast', description: 'A thick milkshake blended with real Oreo cookies.', price: 159.00, imageUrl: 'https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?auto=format&fit=crop&w=600', category: 'Signature Milkshakes' },
            { id: 76, name: 'Choco Brownie', description: 'A chocolate milkshake with chunks of brownie.', price: 159.00, imageUrl: 'https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?auto=format&fit=crop&w=600', category: 'Signature Milkshakes' },
            { id: 77, name: 'Nut-tella', description: 'A creamy milkshake made with real Nutella.', price: 159.00, imageUrl: 'https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?auto=format&fit=crop&w=600', category: 'Signature Milkshakes' },
            { id: 78, name: 'Matcha Blast', description: 'A refreshing milkshake with the earthy taste of matcha.', price: 159.00, imageUrl: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600', category: 'Signature Milkshakes' },

            // --- COFFEE GEAR ---
            { id: 79, name: 'Bialetti Moka Pot', description: 'Classic Italian stovetop espresso maker for rich coffee.', price: 2500.00, imageUrl: 'images/Bialetti Moka Pot.jpg', category: 'Coffee Gear', stock: 10, sold: 0 },
            { id: 80, name: 'Bodum Chambord French Press', description: 'Elegant French press for brewing coffee.', price: 1800.00, imageUrl: 'images/Bodum Chambord French Press.jpg', category: 'Coffee Gear', stock: 15, sold: 0 },
            { id: 81, name: 'Bonavita 8 Cup Coffee Maker', description: 'Programmable drip coffee maker for home use.', price: 3200.00, imageUrl: 'images/Bonavita 8 Cup Coffee Maker.jpg', category: 'Coffee Gear', stock: 8, sold: 0 },

            // --- ESPRESSO MACHINES ---
            { id: 82, name: 'Gaggia Classic Pro Espresso Machine', description: 'Semi-automatic espresso machine for home baristas.', price: 45000.00, imageUrl: 'images/Gaggia Classic Pro Espresso Machine.jpg', category: 'Espresso Machines', stock: 5, sold: 0 },
            { id: 83, name: 'Breville Bambino Plus Espresso Machine', description: 'Compact espresso machine with built-in grinder.', price: 35000.00, imageUrl: 'images/Breville Bambino Plus Espresso Machine.jpg', category: 'Espresso Machines', stock: 7, sold: 0 },
            { id: 84, name: 'Delonghi EC 230.B Pump Espresso Maker', description: 'Manual espresso maker with 15-bar pump.', price: 28000.00, imageUrl: 'images/Delonghi EC 230.B Pump Espresso Maker.jpg', category: 'Espresso Machines', stock: 6, sold: 0 },

            // There are many more items. This is a representative sample.
            // To add all of them, continue the pattern above.
        ];
        localStorage.setItem('bistroMenu', JSON.stringify(defaultMenu));
    }

    // Initialize Users and Orders (code remains the same)
    if (!localStorage.getItem('bistroUsers')) {
        const defaultUsers = [
            { id: 1, name: 'Admin User', email: 'admin@bistro.com', password: 'admin123', role: 'admin' },
            { id: 2, name: 'Supervisor User', email: 'supervisor@bistro.com', password: 'supervisor123', role: 'supervisor' },
            { id: 3, name: 'Cashier User', email: 'cashier@bistro.com', password: 'cashier123', role: 'cashier' }
        ];
        localStorage.setItem('bistroUsers', JSON.stringify(defaultUsers));
    }
    if (!localStorage.getItem('bistroOrders')) {
        localStorage.setItem('bistroOrders', JSON.stringify([]));
    }
    if (!localStorage.getItem('bistroLoginHistory')) {
        localStorage.setItem('bistroLoginHistory', JSON.stringify([]));
    }
}

// --- Data Access Functions (code remains the same) ---

function getMenu() {
    return JSON.parse(localStorage.getItem('bistroMenu')) || [];

}

function getItemsByCategory(category) {
    const menu = getMenu();
    return menu.filter(item => item.category === category);
}

function saveMenu(menu) {
    localStorage.setItem('bistroMenu', JSON.stringify(menu));
}

function addItem(item) {
    const menu = getMenu();
    const newId = menu.length > 0 ? Math.max(...menu.map(i => i.id)) + 1 : 1;
    item.id = newId;
    if (!item.stock) item.stock = 0;
    if (!item.sold) item.sold = 0;
    menu.push(item);
    saveMenu(menu);
    return item;
}

function updateItem(updatedItem) {
    const menu = getMenu();
    const index = menu.findIndex(item => item.id === updatedItem.id);
    if (index !== -1) {
        menu[index] = updatedItem;
        saveMenu(menu);
        return true;
    }
    return false;
}

function deleteItem(itemId) {
    const menu = getMenu();
    const filteredMenu = menu.filter(item => item.id !== itemId);
    if (filteredMenu.length < menu.length) {
        saveMenu(filteredMenu);
        return true;
    }
    return false;
}
// ... (rest of the file is unchanged)
// --- ADD THIS NEW FUNCTION ---
function registerCustomer(name, email, password) {
    const users = JSON.parse(localStorage.getItem('bistroUsers')) || [];

    // Check if the email is already in use
    const userExists = users.some(user => user.email === email);
    if (userExists) {
        return false; // Indicate that registration failed
    }

    // Find the highest existing ID to generate a new one
    const newId = users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1;

    const newCustomer = {
        id: newId,
        name: name,
        email: email,
        password: password, // IMPORTANT: In a real app, this MUST be hashed!
        role: 'customer'
    };

    users.push(newCustomer);
    localStorage.setItem('bistroUsers', JSON.stringify(users));
    
    return true; // Indicate that registration was successful
}
function logLogin(userId, userName, userEmail) {
    const history = JSON.parse(localStorage.getItem('bistroLoginHistory')) || [];
    const newLogEntry = {
        logId: new Date().getTime(),
        userId: userId,
        name: userName,
        email: userEmail,
        loginTime: new Date().toISOString()
    };
    history.unshift(newLogEntry); // Add to the beginning of the array
    localStorage.setItem('bistroLoginHistory', JSON.stringify(history));
}
function getLoginHistory() {
    return JSON.parse(localStorage.getItem('bistroLoginHistory')) || [];
}
function placeOrder(order) {
    const orders = JSON.parse(localStorage.getItem('bistroOrders')) || [];
    const menu = getMenu();

    // Update stock for each item in the order
    order.items.forEach(orderItem => {
        const menuItemIndex = menu.findIndex(item => item.name === orderItem.name);
        if (menuItemIndex !== -1) {
            menu[menuItemIndex].stock -= orderItem.qty;
            menu[menuItemIndex].sold += orderItem.qty;
        }
    });

    saveMenu(menu); // Save the updated menu with new stock levels

    // Add order details
    order.id = new Date().getTime();
    order.timestamp = new Date().toISOString();
    order.status = 'New';
    orders.unshift(order);
    localStorage.setItem('bistroOrders', JSON.stringify(orders));
}

function resetUsers() {
    const defaultUsers = [
        { id: 1, name: 'Admin User', email: 'admin@bistro.com', password: 'admin123', role: 'admin' },
        { id: 2, name: 'Supervisor User', email: 'supervisor@bistro.com', password: 'supervisor123', role: 'supervisor' },
        { id: 3, name: 'Cashier User', email: 'cashier@bistro.com', password: 'cashier123', role: 'cashier' }
    ];
    localStorage.setItem('bistroUsers', JSON.stringify(defaultUsers));
}

// Authentication helpers
function logout() {
    localStorage.removeItem('bistroLoggedInUser');
    localStorage.setItem('sessionExpired', Date.now());
    window.location.replace('login.html');
}

function isAuthenticated() {
    return !!localStorage.getItem('bistroLoggedInUser');
}

function clearSessionFlag() {
    localStorage.removeItem('sessionExpired');
}

// Run initialization on script load
initializeData();
