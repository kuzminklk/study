
data = {
    'name':'Daniil',
    'age':23
}

const response = await fetch('api/workers', {
    'method':'POST',
    'body': JSON.stringify(data)
})