import React, { useState } from 'react';
import TypographyBase from '../markups/TypographyBase';

class AmountInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: '',
    };
  }

  handleOnChange = event => {
    this.setState({ amount: event.target.value });
  };
  //maskingINPUT
  render() {
    return (
      <div className="mb-6">
        <TypographyBase element="h2" className="subtitle">
          What is your total income?
        </TypographyBase>

        <label htmlFor="income" className="sr-only">
          What is your total income?
        </label>
        <div
          className="
            relative 
            h-8 
            mt-1 
            rounded-md
          "
        >
          <div
            className="
              pointer-events-none 
              absolute 
              inset-y-0 left-0 
              flex items-center 
              pl-3
            "
          >
            <span>$</span>
          </div>

          <input
            type="number"
            name="income"
            id="income"
            onChange={this.handleOnChange}
            value={this.state.amount}
            className="
              block 
              w-full h-8 
              border-1 border-gray 
              pl-7 pr-12 
              rounded-md 
              bg-transparent 
              appearance-none
              focus:border-3 focus:border-light-green 
              focus:ring-light-green focus:ring-1
              placeholder:text-light-gray
            "
            placeholder="eg 12,000"
          />
          {/* USE BUTTON INSTEAD */}
          {/* <div
            className="
              absolute 
              inset-y-0 right-0 
              flex 
              items-center
            "
          >
            <label htmlFor="frequency" className="sr-only">
              Frequency
            </label>
            <select
              id="frequency"
              name="frequency"
              className="
                h-full 
                border-0 
                py-0 pl-2 pr-7 
                rounded-r-md 
                text-dark-gray 
                bg-light-gray
              "
            >
              <option>Weekly</option>
              <option>Forthnitely</option>
              <option>Monthly</option>
              <option>Annualy</option>
            </select>
          </div> */}
          {/* USE BUTTON INSTEAD */}
        </div>
      </div>
    );
  }
}

export default AmountInput;
