import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getSongs } from '../../actions/songs/action'
import { BACKEND_URL } from '../../config'
import uuid from 'uuid'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
const axios = require('axios')

class SongList extends Component {

    onDeleteClick = async (id) => {
        await axios.delete(BACKEND_URL + `remove/${id}`)
        this.props.getSongs()
    }


    render() {
        const { songList } = this.props
        let sList = (<></>)
        if (songList.length > 0) {

            sList = songList.map(item =>
                <div key={uuid()}>

                    <Row className="row-custom" >
                        <Row style={{ width: "100%" }}>
                            <Col sm={{ span: 9, offset: 0 }} >
                                {item[4]} | {item[3]}
                            </Col>
                            <Col sm={{ span: 1, offset: 0 }} >
                                {item[5]}:{item[6]}
                            </Col>
                            <Col sm={{ span: 2, offset: 0 }} className="text-right" >
                                <i className="fas fa-times"
                                    style={{ cursor: 'pointer', float: 'right', color: 'red' }}
                                    onClick={this.onDeleteClick.bind(this, item[0])}
                                />
                                <Link to={{
                                    pathname: `/editsong/${item[0]}`,
                                    state: {
                                    }
                                }}>
                                    <i
                                        className="fas fa-pencil-alt"
                                        style={{ cursor: 'pointer', float: 'right', color: 'black', marginRight: '1rem' }}
                                    />
                                </Link>
                            </Col>
                        </Row >
                        <Row style={{ width: "100%" }}>
                            <Col>
                                <div >
                                    <Row style={{ width: "100%" }}>
                                        <Col sm={{ span: 2, offset: 0 }} >
                                            {item[1]}
                                        </Col>
                                        <Col sm={{ span: 2, offset: 8 }} >
                                            {item[2]}
                                        </Col>
                                    </Row>
                                    <Row style={{ width: "100%" }}>
                                        <Col sm={{ span: 12, offset: 0 }} >
                                            {item[7]}
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row >

                    </Row>
                    <br />
                </div>
            )
        }

        let forRender = (<>
            {sList}
        </>)

        return (
            <>{forRender}</>
        )
    }
}

export default connect(null, { getSongs })(SongList)
