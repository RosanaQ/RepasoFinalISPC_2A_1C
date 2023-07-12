from rest_framework import serializers

from .models import UsuariosMedicos
from .models import UsuariosPacientes
from .models import Servicios

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
# Tabla Servicios
class ServicioSerializer(serializers.ModelSerializer):
    class Meta:
        model= Servicios
        fields= '__all__'