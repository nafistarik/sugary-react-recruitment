"use client"

import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { Toast } from "@/types/common.types"

interface UIState {
  toasts: Toast[]
  isGlobalLoading: boolean
  sidebarOpen: boolean
  activeFilters: any
}

const initialState: UIState = {
  toasts: [],
  isGlobalLoading: false,
  sidebarOpen: false,
  activeFilters: null,
}

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    addToast: (state, action: PayloadAction<Toast>) => {
      state.toasts.push(action.payload)
    },
    removeToast: (state, action: PayloadAction<string>) => {
      state.toasts = state.toasts.filter((toast) => toast.id !== action.payload)
    },
    setGlobalLoading: (state, action: PayloadAction<boolean>) => {
      state.isGlobalLoading = action.payload
    },
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen
    },
    setSidebarOpen: (state, action: PayloadAction<boolean>) => {
      state.sidebarOpen = action.payload
    },
    setActiveFilters: (state, action: PayloadAction<any>) => {
      state.activeFilters = action.payload
    },
  },
})

export const { addToast, removeToast, setGlobalLoading, toggleSidebar, setSidebarOpen, setActiveFilters } =
  uiSlice.actions

export default uiSlice.reducer
