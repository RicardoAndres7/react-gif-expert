import { useState } from "react";

export const AddCategory = ( { onNewCategory }) => {

    const [inputValue, setInputValue] = useState('One Punch');

    const onInputChange = ({target}) => {
        setInputValue(target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();

        let inputValueClean = inputValue.trim();
        
        if ( inputValueClean.length <= 1 ) return;

        // setCategories(categories => [inputValue, ...categories]);
        onNewCategory(inputValueClean);
        setInputValue('');
    };



  return (
    <form onSubmit={ (event) => onSubmit(event)}>
        <input
            type="text"
            placeholder="Buscar Gifs"
            value={inputValue}
            onChange={onInputChange}
        />
    </form>
  )
}
