
import { source } from 'ports/input'
import { target } from 'ports/output'
import { updateProduct } from 'domain/product'

function renameProductHandler(command) {
  // Получаем продукт из внешнего сервиса через порт (сайд-эффект):
  const product = source.getProductById(command.productId)

  // Вызываем доменную функцию обновления (чистая функция):
  const updated = updateProduct(product, { name })

  // Сохраняем продукт во внешнем сервисе через порт (сайд-эффект):
  target.saveProduct(updated)
}