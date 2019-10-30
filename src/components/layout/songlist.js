import React, { Component } from 'react'
import uuid from 'uuid'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class SongList extends Component {

    onDeleteClick = async (id) => {
        await axios.delete(BACKEND_URL + `del/${id}`)
        this.props.getTransactions()
    }
    

    render() {
        const { songList } = this.props
        let sList = (<></>)
        //onClick={this.onDeleteClick.bind(this, item[0])}

        if (songList.length > 0) {

            sList = songList.map(item =>
                <div key={uuid()}>

                    <Row className="row-custom" >
                        <Row style={{ width: "100%" }}>
                            <Col sm={{ span: 10, offset: 0 }} >
                                {item[4]} | {item[3]}
                            </Col>
                            <Col sm={{ span: 1, offset: 0 }} >
                                {item[5]}:{item[6]}
                            </Col>
                            <Col sm={{ span: 1, offset: 0 }} className="text-right" >
                                <i className="fas fa-times"
                                    style={{ cursor: 'pointer', float: 'right', color: 'red' }}
                                    onClick={this.onDeleteClick.bind(this, item[0])}
                                />
                            </Col>
                        </Row >
                        <Row style={{ width: "100%" }}>
                            <Col>
                                <div >
                                    <Row style={{ width: "100%" }}>
                                        <Col sm={{ span: 2, offset: 0 }} >
                                            {item[1]}
                                        </Col>
                                        <Col sm={{ span: 2, offset:8 }} >
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


export default SongList