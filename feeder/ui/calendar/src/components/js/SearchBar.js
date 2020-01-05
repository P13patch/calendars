import React, {useState} from 'react'
import '../css/searchBar.css'



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
            <div className="searchfield">
                <div>
                    <div>filter</div>
                    <div>filter</div>
                </div>
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