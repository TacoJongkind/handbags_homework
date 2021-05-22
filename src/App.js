import React from 'react';
import './App.css';
import ButtonDefault from './ButtonDefault';
import Product from './Product';
import Tile from './Tile'

import bag_1 from './assets/bag_1.png'
import bag_2 from './assets/bag_2.png'
import bag_3 from './assets/bag_3.png'
import bag_4 from './assets/bag_4.png'

import brand from './assets/brand.png'
import our_story from './assets/our_story.png'

function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <ButtonDefault
                    isDisabled={false}
                    subject={"to the collection"}/>
                <ButtonDefault
                    isDisabled={false}
                    subject={"shop all bags"}/>
                <ButtonDefault
                    isDisabled={true}
                    subject={"pre order"}/>
            </nav>

            <main>
                <Product
                    spotlight="Best seller"
                    image={bag_1}
                    description="The handy bag"
                    price="€400,-"/>
                <Product
                    spotlight="Best seller"
                    image={bag_2}
                    description="The stylish bag"
                    price="€250,-"/>
                <Product
                    spotlight="New collection"
                    image={bag_3}
                    description="The simple bag"
                    price="€300,-"/>
                <Product
                    spotlight="New collection"
                    image={bag_4}
                    description="The trendy bag"
                    price="€150,-"/>
            </main>
            <footer>
                <Tile
                    title={"THE BRAND"}
                    firstParagraph={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi architecto dolore doloremdolores doloribus iusto, officia quod ratione veniam."}
                    secondParagraph={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At debitis distinctio eaque eum illo illum neque omnis quia quibusdam veniam."}
                />
                <Tile
                    image={brand}
                />
                <Tile
                    image={our_story}
                />
                <Tile
                    title={"OUR STORY"}
                    firstParagraph={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi architecto dolore dolorem  dolores doloribus iusto, officia quod ratione veniam."}
                />

            </footer>
        </>
    )
        ;
}

export default App;



