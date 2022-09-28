import { WareHouseRequest, WareHouseResponse } from "@/entity/warehouse"
import {
  collection,
  getDocs,
  getDoc,
  doc,
  addDoc,
  setDoc,
  deleteDoc,
  Firestore,
  CollectionReference,
  DocumentData,
} from "firebase/firestore/lite"

export interface FirestoreDbWareHouseDataSource {
  createOne(goods: WareHouseRequest): Promise<void>

  updateOne(id: string, payload: WareHouseResponse): Promise<void>

  softDeleteOne(id: string): Promise<void>

  deleteOne(id: string): Promise<void>

  getAll(): Promise<WareHouseResponse[]>

  getOne(id: string): Promise<WareHouseResponse | null>
}

export class FirestoreDbWareHouseDataSourceImpl
  implements FirestoreDbWareHouseDataSource
{
  private db: Firestore
  private coname: string
  private coref: CollectionReference<DocumentData>

  constructor(firestoreDbInstance: Firestore) {
    this.db = firestoreDbInstance
    this.coname = "inv_warehouses"
    this.coref = collection(this.db, this.coname)
  }

  async createOne(payload: WareHouseRequest) {
    await addDoc(this.coref, payload)
  }

  async softDeleteOne(id: string) {
    const docRef = doc(this.db, this.coname, id)
    await deleteDoc(docRef)
  }

  async deleteOne(id: string) {
    const docRef = doc(this.db, this.coname, id)
    await deleteDoc(docRef)
  }

  async updateOne(id: string, data: WareHouseRequest) {
    const docRef = doc(this.db, this.coname, id)
    await setDoc(docRef, data)
  }

  async getAll(): Promise<WareHouseResponse[]> {
    const result = await getDocs(this.coref)
    return result.docs.map((it) => {
      const data = it.data() as WareHouseResponse

      return {
        id_wh: data.id_wh,
        name: data.name,
      }
    })
  }

  async getOne(id: string): Promise<WareHouseResponse | null> {
    const docRef = doc(this.db, this.coname, id)
    const result = await getDoc(docRef)
    if (!result.exists) return null

    const data = result.data() as WareHouseResponse

    return {
      id_wh: data.id_wh,
      name: data.name,
    }
  }
}
