from rest_framework import serializers
from .models import *


class classy_Serializer(serializers.ModelSerializer):
    class Meta:
        model = classy
        fields = '__all__'