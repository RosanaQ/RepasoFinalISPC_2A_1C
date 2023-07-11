from rest_framework import serializers

from .models import UsuariosMedicos
from .models import UsuariosPacientes

# Tabla UsuariosMedicos
class UsuarioMedicoSerializer(serializers.ModelSerializer):
    class Meta:
        model= UsuariosMedicos 
        fields= '__all__'
        
# Tabla UsuariosPacientes
class UsuarioPacienteSerializer(serializers.ModelSerializer):
    class Meta:
        model= UsuariosPacientes
        fields= '__all__'