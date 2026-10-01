from rest_framework import serializers
from .models import *


class User_Serializer(serializers.ModelSerializer):
    class Meta:
        model = usuarios
        fields = '__all__'

class Productos_Serializer(serializers.ModelSerializer):
    class Meta:
        model = productos
        fields = '__all__'

class Marcas_Serializer(serializers.ModelSerializer):
    class Meta:
        model = marcas
        fields = '__all__'

class Categorias_Serializer(serializers.ModelSerializer):
    class Meta:
        model = categorias
        fields = '__all__'

class Carrito_Serializer(serializers.ModelSerializer):
    class Meta:
        model = carrito
        fields = '__all__'

class Carrito_Productos_Serializer(serializers.ModelSerializer):
    class Meta:
        model = carrito_productos
        fields = '__all__'