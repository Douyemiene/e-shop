import {takeLatest, call,all, put} from 'redux-saga/effects'
import {
    firestore,
    convertCollectionsSnapshotToMap
} from '../../firebase/firebase.util'
import {
    fetchCollectionsSuccess,
    fetchCollectionsFailure
} from './shop.actions'
import ShopActionTypes from './shop.types'

export function* fetchCollectionsAsync(){
    try{
    const collectionRef = firestore.collection('abcdef')
    const snapshot = yield collectionRef.get()
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot)
    console.log(convertCollectionsSnapshotToMap(snapshot))
    console.log('collectionsMap')
    console.log(collectionsMap)
    yield put(fetchCollectionsSuccess(collectionsMap))
    }catch(error){
        yield put(fetchCollectionsFailure(error.message))
    }
}
export function* fetchCollectionsStart(){
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync)
}
export function* shopSagas(){
    yield all([call(fetchCollectionsStart)])
}