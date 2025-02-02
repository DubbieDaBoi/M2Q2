export default class gameoverScene extends Phaser.Scene {
    constructor() {
        super("gameoverScene");
    }

    preload() {
        // Load assets like background image, buttons, and audio
        this.load.image('gameoverbackground', './assets/images/BackGround3.png');
        this.load.image('restartButton', './assets/images/reset.png');
        this.load.image('mainMenuButton', './assets/images/main.png');
        
        this.load.audio('gameoverSound', './assets/audio/music/gameoverSound.mp3'); // Replace 'gameoverSound' with your audio file
    }
    
    create(data) {
        const { score, timeSurvived } = data;

        // Add background image
        this.add.image(0, 0, 'gameoverbackground').setOrigin(0, 0).setDisplaySize(this.cameras.main.width, this.cameras.main.height);
    
        // Display game over text
        this.add.text(this.cameras.main.width / 2, 100, 'Game Over', { fontSize: '64px', fontFamily: 'Orbitron', fill: '#ffffff', stroke: '#000', strokeThickness: 8 }).setOrigin(0.5);
    
        // Display score
        this.add.text(this.cameras.main.width / 2, 200, 'Score: ' + score, { fontSize: '32px', fontFamily: 'Orbitron', fill: '#ffffff', stroke: '#000', strokeThickness: 8 }).setOrigin(0.5);
        
        this.add.text(this.cameras.main.width / 2, 250, 'Time Survived: ' + timeSurvived + "s", { fontSize: '32px', fontFamily: 'Orbitron', fill: '#ffffff', stroke: '#000', strokeThickness: 8 }).setOrigin(0.5);

        // Add restart button
        const restartButton = this.add.image(this.cameras.main.width / 2, 600, 'restartButton')
        restartButton.setOrigin(0.5);
        restartButton.setInteractive();
        restartButton.on('pointerdown', () => {
            this.sound.stopAll(); // Stop all sounds before restarting
            this.scene.start('gameScene'); // Restart the game
        });
    
        // Add main menu button
        const mainMenuButton = this.add.image(this.cameras.main.width / 2, 750, 'mainMenuButton')
        mainMenuButton.setOrigin(0.5);
        mainMenuButton.setInteractive();
        mainMenuButton.on('pointerdown', () => {
            this.sound.stopAll(); // Stop all sounds before going back to the title scene
            this.scene.start('titleScene'); // Go back to the title scene
        });

        // Play game over sound
        const gameoverSound = this.sound.add('gameoverSound', { volume: 0.2});
        gameoverSound.play();
    }
}