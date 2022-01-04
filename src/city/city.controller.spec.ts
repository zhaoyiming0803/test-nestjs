import { Test, TestingModule } from '@nestjs/testing';
import { CitysController } from './city.controller';
import { CitysService } from './city.service';

describe('CitysController', () => {
  let controller: CitysController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CitysController],
      providers: [CitysService],
    }).compile();

    controller = module.get<CitysController>(CitysController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
