 const colors = [
            '#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8',
            '#F7DC6F', '#BB8FCE', '#85C1E2', '#F8B195', '#F67280',
            '#C06C84', '#6C5B7B', '#355C7D', '#2A9D8F', '#E76F51',
            '#E9C46A', '#F4A261', '#264653', '#8338EC', '#FF006E',
            '#FB5607', '#FFBE0B', '#3A86FF', '#8338EC', '#06FFA5',
            '#7209B7', '#560BAD', '#480CA8', '#3A0CA3', '#3F37C9'
        ];

        const container = document.querySelector('.container');

        // Create 800 squares (50 columns x 16 rows)
        for (let i = 0; i < 800; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.style.backgroundColor = 'rgb(29, 29, 29)';
            container.appendChild(square);
        }

        const squares = document.querySelectorAll('.square');

        squares.forEach(square => {
            square.addEventListener('mouseover', () => {
                const randomColor = colors[Math.floor(Math.random() * colors.length)];
                square.style.backgroundColor = randomColor;
            });

            square.addEventListener('mouseout', () => {
                setTimeout(() => {
                    square.style.backgroundColor = 'rgb(29, 29, 29)';
                }, 1000);
            });
        });