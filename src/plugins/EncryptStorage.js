import { EncryptStorage } from 'encrypt-storage';
export const encryptStorage = EncryptStorage('test_dowlple_key', {
  storageType: 'localStorage',
  stateManagementUse: false
});
