
	const themes = {
		deep: {
			background: 'rgb(30,30,60,1)',
			borderLight: 'rgb(70,70,110)',
			borderDark: 'rgb(0,0,0)',
			text: 'rgb(255, 255, 255)',
			textClicked: 'rgb(200,200,200)',
		},
		light: {
			background: 'rgb(220,220,220)',
			borderLight: 'rgb(255,255,255)',
			borderDark: 'rgb(190,190,190)',
			text: 'rgb(50,50,50)',
			textClicked: 'rgb(80,80,80)',
		},
		dark: {
			background: 'rgb(40,40,40)',
			borderLight: 'rgb(70,70,70)',
			borderDark: 'rgb(20,20,20)',
			text: 'rgb(255, 255, 255)',
			textClicked: 'rgb(200,200,200)',
		},
	};

	let currentTheme = 'deep';

	function swapTheme() {
		let nextTheme = 'deep';
		switch (currentTheme) {
			case 'deep':
				nextTheme = 'dark';
				break;
			case 'dark':
				nextTheme = 'light';
				break;
			case 'light':
				nextTheme = 'deep';
				break;
		}

		const theme = themes[nextTheme];
		const root = document.documentElement;
		root.style.setProperty('--background', theme.background);
		root.style.setProperty('--border-light', theme.borderLight);
		root.style.setProperty('--border-dark', theme.borderDark);
		root.style.setProperty('--text', theme.text);
		root.style.setProperty('--text-clicked', theme.textClicked);
		currentTheme = nextTheme;
    }
    