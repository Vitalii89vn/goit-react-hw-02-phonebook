import  "./Filter.module.css"

export const Filter = ({onFilter}) => {
    return (
        <div><label htmlFor="filter">Find contacts by name</label>
            <input type="text" name="filter" onChange={onFilter} />
        </div>
    )
}