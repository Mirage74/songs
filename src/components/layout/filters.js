import React, { Component } from 'react'
import uuid from 'uuid'


class Filters extends Component {
    render() {
        const { songsList, onChange, filterArtistName, filterGenre, filterYear } = this.props
        let fArtist = []
        let fGenre = []
        let fYear = []
        let forRender = (<></>)
        if (songsList.length > 0) {
            for (let i = 0; i < songsList.length; i++) {
                fArtist.push(songsList[i][1])
                fGenre.push(songsList[i][2])
                fYear.push(songsList[i][3])
            }
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


