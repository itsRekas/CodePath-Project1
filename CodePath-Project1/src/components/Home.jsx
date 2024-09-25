import React from 'react'
import Card from './Card'

const Home = () => {
  return (
    <div className='Homepage'>
        <h1>THE TEAMS</h1>
        <div className='Homecontent'>
            <Card Name='Liverpool FC' Manager="Arne Slot" source={'https://www.thisisanfield.com/wp-content/uploads/PROP150218-018-Liverpool_Press_Conf-600x421.jpg'} Page={"https://www.liverpoolfc.com/"}/>
            <Card Name='Manchester City FC' Manager="Pep Guardiola" source={'https://images4.alphacoders.com/133/1330232.jpeg'} Page={"https://www.mancity.com/"}/>
            <Card Name='Arsenal FC' Manager="Mikel Arteta" source={'https://logowik.com/content/uploads/images/721_arsenalfc.jpg'} Page={"https://www.arsenal.com/"}/>
            <Card Name='Chelsea FC' Manager="Enzo Maresca" source={'https://i.pinimg.com/originals/04/b4/03/04b403b5cf3449bc0b11855adb91ab31.jpg'} Page={"https://www.chelseafc.com/en"}/>
            <Card Name='Aston Villa FC' Manager="Unai Emery" source={'https://www.dragonrouge.com/wp-content/uploads/2023/02/Villa-1-900x0-c-default.jpg'} Page={"https://www.avfc.co.uk/"}/>
            <Card Name='Manchester United FC' Manager="Erik ten Hag" source={'https://i0.wp.com/americanreddevils.com/wp-content/uploads/2021/12/1366-x-768-16.png?w=1366&ssl=1'} Page={"https://www.manutd.com/"}/>
            <Card Name='Wolverhampton FC' Manager="Gary O'Neil" source={'https://images5.alphacoders.com/116/1166312.png'} Page={"https://www.wolves.co.uk/"}/>
            <Card Name='Brighton FC' Manager="Fabian Hürzeler" source={'https://images4.alphacoders.com/133/1335313.jpeg'} Page={"https://www.brightonandhovealbion.com/pages/en/home"}/>
            <Card Name='Newcastle United FC' Manager="Eddie Howe" source={'https://1000logos.net/wp-content/uploads/2021/05/Newcastle-United-logo.png'} Page={"https://www.newcastleunited.com/en"}/>
            <Card Name='Everton FC' Manager="Sean Dyche" source={'https://wallpapers.com/images/high/everton-f-c-emblem-in-blue-0vho3ue1p5qcgt2p.webp'} Page={"https://www.evertonfc.com/"}/>
        </div>
    </div>
  )
}

export default Home