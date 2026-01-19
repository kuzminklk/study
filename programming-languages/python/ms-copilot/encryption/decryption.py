
import base64
from cryptography.fernet import Fernet
from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.primitives.kdf.pbkdf2 import PBKDF2HMAC


def decrypt_text(encrypted_text, salt, password):
    
    # 1. Воссоздаем ключ из пароля
    kdf = PBKDF2HMAC(
        algorithm=hashes.SHA256(),
        length=32,
        salt=salt,
        iterations=100000,
    )
    key = base64.urlsafe_b64encode(kdf.derive(password))
    
    # 2. Инициализируем инструмент расшифровки
    f = Fernet(key)
    
    try:
        # 3. Дешифруем
        decrypted_bytes = f.decrypt(encrypted_text)
        return decrypted_bytes.decode('utf-8')
    except Exception as e:
        return f"Ошибка: Неверный пароль или поврежденные данные. ({e})"

encrypted_data = input("Введите зашифрованный текст: ").encode()
salt = input('Введите соль: ').encode()
pass_input = input("Введите пароль: ").encode()

result = decrypt_text(encrypted_data, salt, pass_input)
print(f"Результат расшифровки: {result}")