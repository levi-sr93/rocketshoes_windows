import React from 'react'
import {MdAddShoppingCart} from 'react-icons/md'
import tenis from '../../assets/images/tenis.jpg'
import {ProductList} from './styles';

export default function Home(){
    return (
        <ProductList>
            <li>
                <img src={tenis}
                    alt="tenis"
                />
                <strong>Tênis muito legal</strong>
                <span>R$ 129,90</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#fff"/> 3
                    </div>

                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
            <li>
                <img src={tenis}
                    alt="tenis"
                />
                <strong>Tênis muito legal</strong>
                <span>R$ 129,90</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#fff"/> 3
                    </div>

                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
            <li>
                <img src={tenis}
                    alt="tenis"
                />
                <strong>Tênis muito legal</strong>
                <span>R$ 129,90</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#fff"/> 3
                    </div>

                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
            <li>
                <img src={tenis}
                    alt="tenis"
                />
                <strong>Tênis muito legal</strong>
                <span>R$ 129,90</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#fff"/> 3
                    </div>

                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
            <li>
                <img src={tenis}
                    alt="tenis"
                />
                <strong>Tênis muito legal</strong>
                <span>R$ 129,90</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#fff"/> 3
                    </div>

                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
        </ProductList>
    )
}