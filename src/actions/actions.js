export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_DO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const = VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export function addTodo(text){
  return { type: ADD_TODO, text }
}

export function toggleTodo(text){
  return { type: TOGGLE_TODO, text }
}

export function visibilityFilter(filter){
  return { type: SET_VISIBILITY_FILTER, filter }
}