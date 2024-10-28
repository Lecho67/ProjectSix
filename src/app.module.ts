import { Module } from '@nestjs/common';
import { UsuariosModule } from './usuarios/usuarios.module';
import { DiagnosticosModule } from './diagnosticos/diagnosticos.module';
import { SoporteModule } from './soporte/soporte.module';
import { MensajesModule } from './mensajes/mensajes.module';
import { PrismaService } from './prisma.service';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [UsuariosModule, DiagnosticosModule, SoporteModule, MensajesModule, AuthModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}