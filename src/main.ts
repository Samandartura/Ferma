import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const start = async ()=>{
  try {
    const app = await NestFactory.create(AppModule);
    const PORT = process.env.PORT;
    app.setGlobalPrefix('api')
    app.listen(PORT,()=>{
      console.log(`Server ${PORT}-portda ishga tushdi`);
      
    })
  } catch (error) {
    console.log(error);
    
  }
}

start()