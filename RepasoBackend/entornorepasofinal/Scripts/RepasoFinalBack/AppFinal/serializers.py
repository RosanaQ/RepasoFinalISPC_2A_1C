from rest_framework import serializers

from .models import UsuariosMedicos

# Tabla UsuariosMedicos
class UsuarioMedicoSerializer(serializers.ModelSerializer):
    class Meta:
        model= UsuariosMedicos 
        fields= '__all__'
        