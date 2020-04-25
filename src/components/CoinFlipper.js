import React, {Component} from 'react';
import "./CoinFlipperStyles.css";
import Coin from "./Coin";

const options = ["yazi", "tura" ];

const getRandomElFromArr = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const randomItem =  arr[randomIndex];
  return randomItem;
};

class CoinFlipper extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentStatus: options[0],
            gelenler: [],
            donuyor: false,
        }
    }

    atisYap = () => {
        this.setState({
            donuyor: true,
        });
        const rastgeleEleman = getRandomElFromArr(options);
        setTimeout(() => {
            this.setState({
                currentStatus: rastgeleEleman,
                gelenler: [...this.state.gelenler, rastgeleEleman],
                donuyor: false
            })
        }, 1000);
        /*setTimeout(() => {
            this.setState({
                yaziToplam: 0,
                turaToplam: 0
            })
            for(let i = 0; i < this.state.gelenler.length; i++){ 

                if(this.state.gelenler[i] === "yazi"){
                    this.setState({
                        yaziToplam: this.state.yaziToplam + 1
                    })
                }else if(this.state.gelenler[i] === "tura"){
                    this.setState({
                        turaToplam: this.state.turaToplam + 1
                    })
                }

            }
        }, 1000);*/
           
    }

    render() {
        const {currentStatus, donuyor, gelenler} = this.state;
        //const yaziToplam = gelenler.filter(yazi => yazi === "yazi");
        //const turaToplam = gelenler.filter(tura => tura === "tura");
        return (
            <div>
                <h1>
                    Yazi ya da tura
                </h1>
                <Coin currentStatus={currentStatus} donuyor={donuyor}/>
                <button onClick={this.atisYap}>Atis yap</button>
                {
                    gelenler.length > 0 && !donuyor && <h3>{currentStatus} geldi</h3>
                }

                <h3>Toplam {gelenler.length} kere atıldı.</h3>
                {/*<h3>{yaziToplam.length} tane yazı geldi.</h3>
                <h3>{turaToplam.length} tane tura geldi.</h3>*/}
                {
                    options.map((option) => {
                        const sayi = gelenler.filter((item) => item === option);
                        return <h3>{sayi.length} tane {option} geldi.</h3>
                    })
                }

            </div>
        );
    }
}

export default CoinFlipper;