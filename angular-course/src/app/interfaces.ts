import { Status } from "./types";

export interface PageData {
    title: string,
    description: string
} 
export interface Button {
    disabled?: boolean,
    ariaLabel?: string,
    type?: string,
    class?: string,
    status?: Status
    close?: boolean,
    text?: string,
    active?: boolean,
    routerLink?: string,
    routerLinkActive: string
}