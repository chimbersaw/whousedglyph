import { GlyphStateType, GlyphType, TeamType, ServerGlyphType } from './../../types/glyph';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: GlyphStateType = {
    matchId: "",
    glyphs: [] as Array<GlyphType>
}

const parseTime = (minute: number, second: number): string => {
    return `${minute < 10 ? "0" + minute : minute}:${second < 10 ? "0" + second : second}`
}

const glyphSlice = createSlice({
    name: "glyph",
    initialState: initialState,
    reducers: {
        setMatchId(state, action: PayloadAction<{matchId: string}>) {
            const {matchId} = action.payload
            state.matchId = matchId
        },

        addGlyph(state, action: PayloadAction<{newGlyph: GlyphType}>){
            const {newGlyph} = action.payload
            state.glyphs.push(newGlyph)
        },

        setGlyphs(state, action: PayloadAction<{newGlyphs: ServerGlyphType[]}>){
            const {newGlyphs} = action.payload
            return {
                ...state,
                glyphs: newGlyphs.map(newGlyph => ({
                    heroId: newGlyph.heroID,
                    heroName: "Pudge",
                    nickname: newGlyph.username,
                    time: parseTime(newGlyph.minute, newGlyph.second),
                    teamType: TeamType.Dire
                } as GlyphType)
                )
            }
        },

        clearGlyphs(state) {
            state.glyphs = [] as Array<GlyphType>
        }
    }
})

export const glyphActions = glyphSlice.actions

export default glyphSlice.reducer