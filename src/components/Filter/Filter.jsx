// import css from "./Filter.module.css"

export const Filter = () => {
    return (
        <div><label htmlFor="filter">Find contacts by name</label>
            <input type="text" name="filter" />
            
            <ul>
                <li>Name: Number    
                    <button type="button">Delete</button>
                </li>
            </ul>

        </div>
    )
}