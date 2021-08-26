import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation, useParams } from 'react-router-dom'
import { addOrUpdateData } from '../../../redux/actions/admin/adminActions';
import { getCategoryById } from '../../../redux/actions/category/categoryActions';
import { NavbarPage } from '../../navbar/navbar.page'

export const AdminCategoryPage = (props) => {
    const { id } = useParams('id');
    let formRef = useRef();
    const { state } = useLocation('state');
    const dispatch = useDispatch();
    const history = useHistory();
    
    const category = useSelector(state => state.categoryReducer.category);
    const redirect = useSelector(state => state.generalReducer.redirect);
    
    const formSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(formRef.current);
        dispatch(addOrUpdateData(state.tableName, formData, id));
    }

    useEffect(() => {
        redirect !== null && history.push(redirect);
        id && dispatch(getCategoryById(id));
    },[redirect])
    
    
    return (
        <div>
            <NavbarPage/>

            <form className="container" ref={formRef} onSubmit={formSubmit}>
                <div className="row">
                    <div className="col-md-8 mt-5">
                        <div className="d-flex flex-column align-items-start">
                            <label>Name</label>
                            <input type="text" defaultValue={category && category.name} className="form-control" name='name'></input>
                        </div>
                    </div>
                    <div className="col-md-8 d-flex justify-content-end mb-2 mt-3">
                        <button type='submit' className="btn btn-success">{id ? 'Update category' : 'Create category'}</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
