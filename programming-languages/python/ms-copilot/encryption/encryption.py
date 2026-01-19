
from cryptography.fernet import Fernet
import base64
from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.primitives.kdf.pbkdf2 import PBKDF2HMAC


content = input('Введите текст: ').encode()
salt = input('Введите соль: ').encode()
password = input('Введите пароль: ').encode()

kdf = PBKDF2HMAC(algorithm=hashes.SHA256(), length=32, salt=salt, iterations=100000)
key = base64.urlsafe_b64encode(kdf.derive(password))

f = Fernet(key)
token = f.encrypt(content) # Шифрование
print(token)