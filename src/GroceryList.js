import { Component } from 'react'; 
import bag from './bag.png';

export class GroceryList extends Component { 
    state = {
        userInput: '',
        groceryList: [], // - в этих двух строчках мы помечаем изначальное состояние input, а так же массив, в который будет идти то, что напишет пользователь (пока пустой массив)
    }

    onChangeEvent(e) { // -- e, то есть event, мы пишем для того, чтобы реагировало на каждое событие
        this.setState({userInput: e}); // -- здесь то, что пишет пользователь мы каждый раз приравниваем к e
    }

    addItem(input) {
        if (input === '') {
            alert('Please enter an item!');
        }

        else {
        let listArray = this.state.groceryList; //
        listArray.push(input); // добавляем элемент в конец массива с помощью метода push
        this.setState({groceryList: listArray, userInput: ''}) // тут мы добавляем написанное пользователем в наш массив и затем опустошаем input
        }
    }

    ClearItems() {
        let listArray = this.state.groceryList; // тут мы хотим получить доступ к массиву списка
        listArray = []; // очищаем массив от данных, те приравниваем к пустому массиву
        this.setState({groceryList: listArray});
    }

    crossedWord(event) { // как только что-то будет происходить c li, то...
        const li = event.target; // создаем константу, ставим обработчик событий
        li.classList.toggle('crossed'); // на li добавляем класс, который мы изменим через CSS/, метод toggle() добавляет класс, если его нет и убирает, если он есть
    }

    onFormSubmit(e) { // функция, которая позволит нам добавлять объекты нажатием кнопки enter
        e.preventDefault(); // предотвращаем то, что страница перезагружается каждый раз при нажатии на enter
    }

    render() {
        return ( 
            <div>
                <form onSubmit={this.onFormSubmit}> {/* используем для того, чтобы при нажатии на ентер добалялся инпут пользователя */}
                <div className='list'>
                <input type='text'
                onChange={(e) => {this.onChangeEvent(e.target.value)}} // -- тут мы получаем доступ к тому, что пишет пользователь в input
                placeholder='What do you wanna buy today?'
                value={this.state.userInput} />
                </div> 

                <div className='list'>
                    <button onClick={() => this.addItem(this.state.userInput)} className='btn add'>Add</button> {/* при каждом клике будет добавляться новый элемент (функцию пропишем позже) */}
                </div>

                <ul>
                    {this.state.groceryList.map((item, index) => ( // получаем доступ к КАЖДОМУ элементу массива (item), используя метод map()
                        <li onClick={this.crossedWord} key={index}> {/* присваеваем уникальный ключ к каждому элементу, чтобы не было ошибки в console.log */}
                            <img src={bag} width='35px' alt='check'/>
                            {item}</li>
                    ))}
                </ul>

                <div className='list'>
                <button onClick={() => this.ClearItems()} className='btn clear'>Clear</button>
                </div>
                </form>
            </div>

        )
    }
} 