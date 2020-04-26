import React from "react";
import "./App.css";
import Button from "./Button";

class App extends React.Component {
  state = {
    ingredients: {
      Сыр: false,
      Ананасы: false,
      Ветчина: false,
      Салями: false,
      Курица: false,
      Томаты: false,
      Огурцы: false,
      "Острый перец": false,
      Соус: false,
    },
    item: 0,
  };

  choice = (name) => {
    const { ingredients } = this.state;
    this.setState({
      ingredients: { ...ingredients, [name]: !ingredients[name] },
    });
  };

  sum = (elem) => {
    if (elem === false) {
      this.setState({ item: this.state.item + 1 });
    } else {
      this.setState({ item: this.state.item - 1 });
    }
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
        <h2>Пицца</h2>
        {listItems}
        <h3 className="choice">Вы выбрали {this.state.item} игрeдиентов.</h3>
        <h4>
          {this.state.item >= 5 ? "Можно выбрать до 5 ингрeдиентов!" : ""}
        </h4>
      </div>
    );
  }
}

export default App;
