import { OrderedMap } from 'immutable'

export function getFirstRecordFromArray(RecordType, array) {
  if (array.length == 0) {
    return new RecordType()
  }
  let el = array[0];
  return new RecordType(el)
}

export function recordsFromArray(RecordType, array) {
  return array.reduce((map, el) => {
    return map.set(el.id, new RecordType(el))
  }, new OrderedMap({}))
}

export function changeEntityValue(entity, payload) {
  return entity.set(payload.key, payload.value)
}

export function changeEntityValueInList(entityList, entityId, payload) {
  return entityList.set(entityId, changeEntityValue(entityList.get(entityId), payload))
}