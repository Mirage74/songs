import React, { Component } from 'react'
import { SHOW_ALL } from '../../config'
import uuid from 'uuid'


class Filters extends Component {

    uniq = (a) =>  {
        let seen = {};
        return a.filter(function (item) {
            return seen.hasOwnProperty(item) ? false : (seen[item] = true)
        })
    }

    render() {
        const { songsList, onChange, filterArtistName, filterGenre, filterYear } = this.props
        
        let fArtist = [SHOW_ALL]
        let fGenre = [SHOW_ALL]
        let fYear = [SHOW_ALL]
        let forRender = (<></>)
        if (songsList.length > 0) {
            for (let i = 0; i < songsList.length; i++) {
                fArtist.push(songsList[i][1])
                fGenre.push(songsList[i][2])
                fYear.push(songsList[i][3])
            }
            fArtist = this.uniq(fArtist)
            fGenre = this.uniq(fGenre)
            fYear = this.uniq(fYear)
            fArtist.pu

            forRender = (<>
                <div>
                    <div style={{ marginBottom: 25 }} className="input-group">
                        <select className="form-control" id="FiltersArt" onChange={onChange} name="filterArtistName" value={filterArtistName}>
                            {fArtist.map(cnt => (
                                <option key={uuid()}>
                                    {cnt}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div style={{ marginBottom: 25 }} className="input-group">
                        <select className="form-control" id="FiltersGen" onChange={onChange} name="filterGenre" value={filterGenre}>
                            {fGenre.map(cnt => (
                                <option key={uuid()}>
                                    {cnt}
                                </option>
                            ))}
                        </select>
                    </div>                    
                    <div style={{ marginBottom: 25 }} className="input-group">
                        <select className="form-control" id="FiltersYear" onChange={onChange} name="filterYear" value={filterYear}>
                            {fYear.map(cnt => (
                                <option key={uuid()}>
                                    {cnt}
                                </option>
                            ))}
                        </select>
                    </div>                    
                </div>
                </>
            )
        }
        return (<>
            { forRender }
            </>
        )
    }
}
export default Filters


