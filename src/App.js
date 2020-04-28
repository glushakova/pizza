import React from 'react';
import './App.css';
import Button from './Button';
import Clear from './Clear';
import data from './ingredients.json';

class App extends React.Component {
  state = {
    ingredients: data,
    item: 0,
  };

  choice = (name) => {
    const { ingredients } = this.state;
    this.setState({
      ingredients: { ...ingredients, [name]: !ingredients[name] },
    });
  };

  sum = (elem) => {
    this.setState({ item: elem ? this.state.item - 1 : this.state.item + 1 });
  };

  clear = () => {
    const update = { ...this.state.ingredients };
    Object.keys(update).forEach((key) => {
      update[key] = false;
    });

    this.setState({
      item: 0,
      ingredients: update,
    });
  };

  render() {
    const { ingredients, item } = this.state;

    const listItems = Object.keys(ingredients).map((key) => (
      <Button
        key={key}
        text={key}
        choice={ingredients[key]}
        item={item}
        onClick={() => {
          this.choice(key);
          this.sum(ingredients[key]);
        }}
      />
    ));

    return (
      <div className="App">
        <div className="clear">
          <h2>Пицца</h2>
          <Clear onClick={this.clear} />
        </div>
        {listItems}
        <h3 className="choice">{`Вы выбрали ${this.state.item} игрeдиентов.`}</h3>
        <h4>{this.state.item >= 5 && 'Можно выбрать до 5 ингрeдиентов!'}</h4>
      </div>
    );
  }
}

export default App;
