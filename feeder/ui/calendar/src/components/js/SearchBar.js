import React, {useState} from 'react'



function SearchBar() {
    const [openField, setOpenField] = useState(false)


    const searchClick = event => {
        setOpenField(true)
        if (openField === true) {
           }
    }

    function searchField(openfield){
        if (openfield === true) {

        
        return(
            <div>
                <ul>
                    <li>filter</li>
                    <li>filter</li>
                </ul>
            </div>
        )
        }
        else {
            return(
                <div></div>
            )
        }
    }

    return (
        <form>
            Search
            <input type="text" name="Search" onClick={searchClick}></input>
            <div>
               {searchField(openField)}
            </div>
        </form>
    )
}

export default SearchBar