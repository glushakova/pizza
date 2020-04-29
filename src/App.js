import React from 'react';
import './App.css';
import Button from './Button';
import Clear from './Clear';
import data from './ingredients.json';

class App extends React.Component {
  state = {
    ingredients: data,
  };

  choice = (name) => {
    const { ingredients } = this.state;
    this.setState({
      ingredients: { ...ingredients, [name]: 1 },
    });
  };

  sum = () => {
    return Object.values(this.state.ingredients).filter((count) => {
      return count > 0;
    }).length;
  };
  getAll = () => {
    return Object.values(this.state.ingredients)
      .filter((count) => {
        return count > 0;
      })
      .reduce((sum, current) => sum + current, 0);
  };

  clear = () => {
    const update = { ...this.state.ingredients };
    Object.keys(update).forEach((key) => {
      update[key] = 0;
    });

    this.setState({
      item: 0,
      ingredients: update,
    });
  };

  minus = (name, num) => {
    const { ingredients } = this.state;

    this.setState({
      ingredients: { ...ingredients, [name]: num - 1 },
    });
  };

  plus = (name, num) => {
    const { ingredients } = this.state;

    this.setState({
      ingredients: { ...ingredients, [name]: num + 1 },
    });
  };

  render() {
    const { ingredients } = this.state;
    const listItems = Object.keys(ingredients).map((key) => (
      <Button
        key={key}
        text={key}
        choice={ingredients[key]}
        minus={() => {
          this.minus(key, ingredients[key]);
        }}
        plus={() => {
          this.plus(key, ingredients[key]);
        }}
        onClick={() => {
          this.choice(key);
        }}
        disabled={this.sum() >= 5 ? true : false}
      />
    ));

    return (
      <div className="App">
        <div className="clear">
          <h2>Пицца</h2>
          <Clear onClick={this.clear} />
        </div>
        {listItems}
        <h3 className="choice">
          {`Выбрано игредиентов: ${this.sum()}, общее количество: ${this.getAll()}`}
        </h3>
        <h4>{this.sum() >= 5 && 'Можно выбрать до 5 ингрeдиентов!'}</h4>
      </div>
    );
  }
}

export default App;
