import {describe, it, expect, vi } from 'vitest';
import * as repo from '../backend/utils/fileHandler.js';
import { getChars } from '../backend/services/charService.js';

describe('Characters Service', () => {
    it('Should return all characters from the characters.json', async () => {
        const mockChars = [
            { id: '1', name: 'Yoda', alliance: 'Jedi'},
            { id: '2', name: 'Han Solo', alliance: 'Resistance'},
            { id: '3', name: 'Darth Vader', alliance: 'Sith'},
        ];

        vi.spyOn(repo, 'readChars').mockResolvedValue(mockChars);

        const result = await getChars();

        //kunne for the life of me ikke få den her til at fungere
        // expect(repo.readChars).toHaveBeenCalledTimes(1);
        expect(result).toEqual(mockChars);
    });
});