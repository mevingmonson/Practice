import React from 'react'

export default function From(props) {
    return (
        <form onSubmit={props.onSubmit}>
            <div className="row">
                <div className="col">
                    <input type="text" name="Name" className="form-control" placeholder="First name" />
                </div>
                <div className="col">
                    <input type="number" name="Age" className="form-control" placeholder="Age" />
                </div>
                <div className="col">
                    <button type="submit" className="btn btn-sm btn-success">Add</button>
                </div>
            </div>
        </form>
    )
}
