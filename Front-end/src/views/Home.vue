<template>
    <div class="container">
        <div class="header">
            <h1 class="title">Roll The Dice</h1>
        </div>
        <div class="main">
           <div class="dicesContainer">
            <div class="dice" @click="handleclick($event)">
                <img src="../assets/d4.svg" alt="Dice 4" class="dices" id="4">
            </div>

            <div class="dice" @click="handleclick($event)">
                <img src="../assets/d6.svg" alt="Dice 6" class="dices" id="6">
            </div>

            <div class="dice" @click="handleclick($event)" >
                <img src="../assets/d8.svg" alt="Dice 8" class="dices" id="8">
            </div>

            <div class="dice" @click="handleclick($event)" >
                <img src="../assets/d10.svg" alt="Dice 10" class="dices" id="10">
            </div>

            <div class="dice" @click="handleclick($event)" >
                <img src="../assets/d12.svg" alt="Dice 12" class="dices" id="12">
            </div>

            <div class="dice" @click="handleclick($event)" >
                <img src="../assets/d20.svg" alt="Dice 20" class="dices" id="20">
            </div>
           </div>

           <div class="buttonContainer">
                <button class="rollButton" @click="rollDice">Roll!</button>
           </div>

           <div class="resultRoll">
             <h2 class="resultTitle">Result:</h2>
             <span class="result">{{ reusltRollDice }}</span>
           </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data() {
            return {
                diceOption: 0,
                reusltRollDice: null
            }
        },
        components: {
            
        },
        methods: {
            handleclick(e) {
                this.diceOption = e.target.id
                console.log(this.diceOption)
            },
            rollDice() {
                axios.post('http://localhost:3000/roll', { diceOption: this.diceOption})
                    .then(response => {
                        this.reusltRollDice = response.data.result
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
        }
    }
</script>

<style lang="scss" scoped>

.container {
    height: 100vh;
    background-image: url('../assets/background.jpg');
    background-size:cover;
    .header {
        display: flex;
        justify-content: center;
        align-items: center;
        .title {
            margin-top: 5px;
            font-family: 'DragonHunter', sans-serif;
            font-size: 75px;
            color: #000;
        }
    }

    .main {
        margin-top: 45px;
        .dicesContainer {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 5px;

            .dice {
                cursor: pointer;
                border: 5px solid black;
                border-radius: 3px;
                &:hover {
                    opacity: 0.5;
                }
                .dices {
                    width: 125px;
                    height: 125px;
                }
            }
        }

        .resultRoll {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;

            margin-top: 50px;

            .resultTitle {
                font-family: 'DragonHunter', sans-serif;
                letter-spacing: 0.05em;
                font-size: 30px;
            }
            .result {
                font-family: 'DragonHunter', sans-serif;
                font-size: 25px;
            }
        }
    }

    .buttonContainer {
        display: flex;
        align-items: end;
        justify-content: center;

        margin-top: 50px;
        .rollButton {
            cursor: pointer;
            background: transparent;
            width: 225px;
            height: 35px;
            font-family: 'DragonHunter', sans-serif;
            font-size: 30px;
        }
    }
}
    
</style>